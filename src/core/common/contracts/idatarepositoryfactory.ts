import { IRepository } from "./index";

export interface IDataRepositoryFactory {
   GetDataRepository<T extends IRepository>(): T;
}


