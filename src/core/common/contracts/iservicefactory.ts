import { IServiceContract } from "./iservicecontract";

export interface IServiceFactory {
   CreateClient<T extends IServiceContract>(): T;
}