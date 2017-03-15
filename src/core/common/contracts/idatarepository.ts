import { IIdentifiableEntity, IRepository } from "./index";
//

export interface IDataRepository<T extends IIdentifiableEntity & { new (); }> extends IRepository {
   Add(entity: T): T;
   Remove(entity: T): void;
   Remove(id: number): void;
   Update(entity: T): T;
   Get(): Array<T>;
   Get(id: number): T;
}
