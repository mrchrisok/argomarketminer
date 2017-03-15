import { ILogger } from "../contracts"
//

export class ConsoleLogger implements ILogger {
   constructor(logToConsole?: boolean) {
      this.LogToConsole = logToConsole ? logToConsole : true;
   }

   public LogToConsole: boolean;

   public LogMessage(messageFormat: string, ...parameters: {}[]);
   public LogMessage(message: string) {
      util.log(message);
   }

   public LogError(ex: Error, messageFormat: string, ...parameters: {}[]);
   public LogError(ex: Error, message: string) {
      util.log(message);
   }
}