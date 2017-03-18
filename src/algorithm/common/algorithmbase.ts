import { IAlgorithm } from "./contracts";
import { IEventLogger, ILogger, ObjectBase, TraceEventType, stringN } from "../../core";
import { ObservableArray, NotifyArrayChangedEventArgs, NotifyArrayChangedAction } from "../../core";
import * as e from "../../client/entities";
import { StrategyCaller, MetadataCaller } from "../../client/proxies";
import { AlgorithmParameters } from "./index";
import { Enum, AlgorithmStatus } from "../../common/enums";

export abstract class AlgorithmBase implements IAlgorithm {
   constructor(
      private _logger: IEventLogger
   ) {
      this._logger.LogToConsole = true;
   }

   // declarations
   private _parameters: AlgorithmParameters;
   protected _shutdown: boolean = false;
   protected _suspended: () => boolean;
   protected _accountId: number;
   protected _strategy: e.Strategy;
   protected _instance: e.AlgorithmInstance;
   protected _messages: ObservableArray<e.AlgorithmMessage>
   protected _shortClassName: string;

   // properties
   get Parameters() { return this._parameters; }
   Name: string;

   // members.IAlgorithm
   get Logger(): ILogger { return this._logger; }
   get Strategy() { return this._strategy; }
   get Instance() { return this._instance; }
   get Messages() { return this._messages; }

   public async Initialize(strategyId: number): Promise<boolean> {
      try {
         this.AddAlgorithmMessage(`${this._shortClassName} is starting ...`, true, TraceEventType.Start);

         if (strategyId <= 0)
            throw new RangeError("StrategyId may not be less than or equal to 0.");

         if (this._logger === null)
            this._logger = ObjectBase.Container.get<IEventLogger>("");

         MetadataCaller.Instance().ClearCacheAsync();

         let strategy = await StrategyCaller.Instance().GetStrategyAsync(strategyId);
         if (strategy === null)
            throw new Error(`Strategy not found for strategyId ${strategyId}.`);

         this._strategy = strategy;
         this._shortClassName = this._strategy.Name.split('.').pop() || "";
         if (this._shortClassName === "")
            throw new Error(`StrategyId ${strategyId} cannot be an empty string.`);

         this._parameters = new AlgorithmParameters(await StrategyCaller.Instance().GetAlgorithmParametersAsync(this._strategy.StrategyID));

         // create and save instance
         this._instance = new e.AlgorithmInstance();
         this._instance.StrategyID = strategyId;
         this._instance.Status = AlgorithmStatus.NotRunning;

         await this.UpdateAlgorithmInstance();

         this._messages = new ObservableArray<e.AlgorithmMessage>();

         // hook up event handlers
         this.Messages.on("push", this.OnAlgorithmMessageChanged);

         this._suspended = () => { return this._instance.Status === AlgorithmStatus.RunningSuspended; };

         this.AddAlgorithmMessage(`${this._shortClassName} is initialized.`, true, TraceEventType.Start);

      } catch (err) {
         err = new Error(`Algorithm for strategyId: ${strategyId} failed to initialize.`);
         this.AddAlgorithmException(err).then(() => { return false; });
      }

      return true;
   }
   // public abstract Onbar(data): void;
   // public abstract Onheartbeat(data): void;
   // public abstract Onload(data): void;
   // public abstract Ontick(data): void;
   // public abstract Ontransaction(data): void;
   // public abstract Onunload(data): void;

   async Start(): Promise<boolean> {
      this.UpdateAlgorithmInstanceProperty("Status", AlgorithmStatus.Starting);
      this.UpdateAlgorithmInstanceProperty("RunStartDateTime", Date.UTC);

      return true;
   }

   async Stop(): Promise<boolean> {
      this._shutdown = true;
      this.UpdateAlgorithmInstanceProperty("Status", AlgorithmStatus.NotRunning);
      this.UpdateAlgorithmInstanceProperty("RunStopDateTime", Date.UTC);
      this.AddAlgorithmMessage(`${this._shortClassName} instance stopped.`, true, TraceEventType.Stop);

      return this._shutdown;
   }

   // utilities
   private async UpdateAlgorithmInstance(): Promise<void> {
      this._instance = await StrategyCaller.Instance().UpdateAlgorithmInstanceAsync(this._instance);
   }

   protected async UpdateAlgorithmInstanceProperty<K extends keyof e.AlgorithmInstance>(propertyName: K, value: any, message: stringN = null): Promise<void> {
      this._instance.SetValue(propertyName, <e.AlgorithmInstance[K]>value);

      this.UpdateAlgorithmInstance();

      function addAlgorithmMessage(msg: string): void {
         this.AddAlgorithmMessage(`${this._shortClassName} ${msg}`, true, TraceEventType.Information);
      }

      // write message to db and to subscribers
      switch (propertyName) {
         case "Status":
            addAlgorithmMessage(`status changed to: ${Enum.AsAlgorithmStatusString(this._instance.Status)}`);
            break;
         case "RunStartDateTime":
            addAlgorithmMessage(`run start date-time is: ${this._instance.RunStartDateTime}`);
            break;
         case "RunStopDateTime":
            addAlgorithmMessage(`run stop date-time is: ${this._instance.RunStopDateTime}`);
            break;
         default:
            addAlgorithmMessage((message === null) ? `property value changed.` : message);
            break;
      }
   }

   protected async AddAlgorithmMessage(message: string, saveMesage: boolean = true, type: TraceEventType = 0, err?: Error): Promise<void> {
      const newMessage = new e.AlgorithmMessage();
      newMessage.AlgorithmInstanceID = this._instance.AlgorithmInstanceID;
      newMessage.Message = message;
      newMessage.Severity = type;
      newMessage.Error = err;

      // limit coll. size due to memory
      if (this.Messages.length >= 200) this.Messages.shift();
      this.Messages.push(newMessage);

      if (saveMesage)
         StrategyCaller.Instance().UpdateAlgorithmMessageAsync(newMessage);
   }

   protected async AddAlgorithmException(err: Error, message: stringN = null): Promise<void> {
      this.AddAlgorithmMessage((message === null) ? err.message : message, true, TraceEventType.Error, err);
   }

   // event handlers
   private OnAlgorithmMessageChanged(sender: object, ev: NotifyArrayChangedEventArgs<e.AlgorithmMessage>): void {
      if (sender instanceof e.AlgorithmMessage) {
         if (ev.Action == NotifyArrayChangedAction.Add) {
            ev.NewItems.forEach(item => {
               let message: e.AlgorithmMessage = <e.AlgorithmMessage>item;

               if (this._logger !== null) {
                  if (message.Error)
                     this._logger.LogError(message.Severity, message.Error, message.Message);
                  else
                     this._logger.LogMessage(message.Severity, message.Message);
               }
            });
         }
         if (ev.Action == NotifyArrayChangedAction.Replace) {
            //
         }
         if (ev.Action == NotifyArrayChangedAction.Remove) {
            //
         }
         if (ev.Action == NotifyArrayChangedAction.Move) {
            //
         }
      }
   }
}