import { IMailer } from "./imailer";

export interface IMailerFactory {
   GetMailer<T extends IMailer>(): T;
   GetMailer(assemblyQualifiedName: string): IMailer;
}