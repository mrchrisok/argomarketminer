import * as request from "request";
import { IDisposable } from "../contracts";
import { StringDex } from "../index";
import { IConfiguration } from "../contracts/iconfiguration";
import { ILogger } from "../../../core/index";
//

export type RequestOptions = request.UrlOptions & request.CoreOptions

export class ClientBase implements IDisposable {
   constructor(config: IConfiguration, contractName: string) {
      if (!config.Services)
         throw Error("Services element missing from configuration.");

      this._url = config.Services[contractName].url;
      this._headers.userName = config.Services[contractName].userName;
   }

   protected _logger: ILogger;
   private _url: string;
   private _headers: StringDex<string> = {};

   Get(options: RequestOptions, callback: request.RequestCallback | undefined): request.Request {
      options.json = true;
      options.url = `${this._url}${options.url}`;
      return request.get(options, callback);
   }

   Post(options: RequestOptions, callback: request.RequestCallback | undefined): request.Request {
      options.json = true;
      options.url = `${this._url}${options.url}`;
      return request.post(options, callback);
   }

   Patch(options: RequestOptions, callback: request.RequestCallback | undefined): request.Request {
      options.json = true;
      options.url = `${this._url}${options.url}`;
      return request.patch(options, callback);
   }

   GetResponseHandler(callback: (body: any) => void): request.RequestCallback {
      function handler(error: any, response: request.RequestResponse, body: any): void {
         if (!error) {
            if (response.statusCode == 200) {
               callback(body);
            } else {
               this._logger.LogError(<Error>error, `Remote Error: ${body.code} : ${body.message}`);
            }
         } else {
            this._logger.LogMessage(<Error>error, `Internal Error: ${error.message}`);
         }
      }
      return handler;
   }

   Dispose() {

   }
}

