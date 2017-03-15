import { IAlgorithm } from "./contracts";
import { IEventLogger, ILogger, ObjectBase, ObservableArray, TraceEventType } from "../../core";
// import * as core from "../../core";
import * as ce from "../../client/entities";
import { StrategyCaller } from "../../client/proxies";
import { AlgorithmParameters } from "./index";

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
   protected _strategy: ce.Strategy;
   protected _instance: ce.AlgorithmInstance;
   protected _messages: ObservableArray<ce.AlgorithmMessage>
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
         AddAlgorithmMessage(`${this._shortClassName} is starting ...`, true, TraceEventType.Start);

         if (strategyId <= 0)
            throw new RangeError("StrategyId may not be less than or equal to 0.");

         if (this._logger == null)
            this._logger = ObjectBase.Container.get<IEventLogger>("");

         MetadataCaller.Instance().ClearCache();

         let strategy = StrategyCaller.Instance().GetStrategy(strategyId);
         if (strategy == null)
            throw new Error(`Strategy not found for strategyId ${strategyId}.`);

         this._strategy = strategy;
         this._shortClassName = this._strategy.Name.split('.').pop() || "";
         if (this._shortClassName == "")
            throw new Error(`StrategyId ${strategyId} cannot be an empty string.`);

         this._parameters = new AlgorithmParameters(await StrategyCaller.Instance().GetAlgorithmParametersAsync(_strategy.StrategyID));

         // create and save instance
         this._instance = new AlgorithmInstance() { StrategyID = strategyId, Status = (short ?)AlgorithmStatus.NotRunning };
         await UpdateAlgorithmInstance();

         this._messages = new ObservableArray<ce.AlgorithmMessage>();

         // hook up event handlers
         this.Messages.on("push", OnAlgorithmMessageChanged);

         this._suspended = () => { return this._instance.Status == (short ?)AlgorithmStatus.RunningSuspended; };

         AddAlgorithmMessage(string.Format("{0} is initialized.", _shortClassName), true, TraceEventType.Start);
      } catch (err) {
         Error err = new Error(`Algorithm for strategyId: ${strategyId} failed to initialize.`);
         tihs.AddAlgorithmException(err).Wait();
         return false;
      }

      return true;
   }
   public abstract Start(): boolean;
   // public abstract Onbar(data): void;
   // public abstract Onheartbeat(data): void;
   // public abstract Onload(data): void;
   // public abstract Ontick(data): void;
   // public abstract Ontransaction(data): void;
   // public abstract Onunload(data): void;
}