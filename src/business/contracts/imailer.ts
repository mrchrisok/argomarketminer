import { IDisposable } from "../../core/index";

export interface IMailer extends IDisposable {
   SendMail(sender: string, recipients: string, subject: string, body: string): boolean;
   SendMail(sender: string, recipients: string, subject: string, body: string, ccRecipients: string[]): boolean;
   SendMail(sender: string, recipients: string, subject: string, body: string, ccRecipients: string[], bccRecipients: string[]): boolean;
   SendMail(sender: string, recipients: string, subject: string, body: string, ccRecipients: string[], bccRecipients: string[], attachments: string[]): boolean;
}