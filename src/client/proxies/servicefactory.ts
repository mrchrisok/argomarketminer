import { ObjectBase, IServiceFactory } from "../../core/common";
//

export class ServiceFactory implements IServiceFactory {
   CreateClient<T>(): T {
      return ObjectBase.Container.get<T>("");
   }
}