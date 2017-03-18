import { ClientBase } from "../../../core/common/servicemodel/index";
import { IConfiguration, ILogger } from "../../../core/index";
import { Account } from "../../entities";
import "reflect-metadata";
import { inject, injectable } from "inversify/dts/inversify";
import { IAccountService } from "../../index";

@injectable()
export class AccountClient extends ClientBase implements IAccountService {
   constructor(
      @inject("AppConfig") _config: IConfiguration,
      @inject("") logger: ILogger
   ) {
      super(_config, "IMetadataService");
      this._logger = logger;
   }

   async GetAccountAsync(loginEmail: string): Promise<Account> {
      let account;
      const body = { loginEmail: loginEmail };
      const options = { url: "GetAccount", body: body }
      function callback(body: any): void { account = Object.assign(new Account(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return account as Account;
   }

   async UpdateAccountAsync(account: Account): Promise<Account> {
      const body = { account: JSON.stringify(account) };
      const options = { url: "UpdateAccount", body: body }
      function callback(body: any): void { account = Object.assign(account, body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return account;
   }
}
