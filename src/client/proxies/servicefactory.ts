import { ObjectBase, IServiceFactory } from "../../core/common";
import { injectable } from "inversify/dts/annotation/injectable";
import "reflect-metadata";
//

@injectable()
export class ServiceFactory implements IServiceFactory {
   CreateClient<T>(): T {
      return ObjectBase.Container.get<T>("");
   }
}