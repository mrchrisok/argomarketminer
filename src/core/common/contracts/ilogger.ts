import { TraceEventType } from "../core";

export interface ILogger {
   LogToConsole: boolean;

   LogMessage(severity: TraceEventType, messageFormat: string, parameters: {}[]): void;
   LogMessage(severity: TraceEventType, message: string): void;

   LogError(severity: TraceEventType, err: Error, messageFormat: string, parameters: {}[]): void;
   LogError(severity: TraceEventType, err: Error, message: string): void;
}

export interface IEventLogger extends ILogger {

}