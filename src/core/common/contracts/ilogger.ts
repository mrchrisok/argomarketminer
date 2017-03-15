export interface ILogger {
   LogToConsole: boolean;

   LogMessage(messageFormat: string, parameters: {}[]): void;
   LogMessage(message: string): void;

   LogError(err: Error, messageFormat: string, parameters: {}[]): void;
   LogError(err: Error, message: string): void;
}

export interface IEventLogger extends ILogger {

}