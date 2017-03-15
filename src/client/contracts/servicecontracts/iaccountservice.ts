import { IServiceContract } from "../../../core/index";

export interface IAccountService extends IServiceContract {
   GetAccountAsync(loginEmail: string): Promise<Account>;
   UpdateAccountAsync(account: Account): Promise<Account>;
}
