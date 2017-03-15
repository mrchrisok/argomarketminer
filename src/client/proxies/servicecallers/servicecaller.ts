import { ObjectBase, IDisposable, IServiceFactory } from "../../../core/common";

export abstract class ServiceCaller {
   protected _serviceFactory: IServiceFactory = ObjectBase.Container.get<IServiceFactory>("");

   protected async WithClientAsync<T extends IDisposable>(proxy: T, codeToExecute: (service: T) => Promise<void>): Promise<void> {
      await codeToExecute(proxy);
      this.DisposeProxy(proxy as IDisposable);
   }

   private DisposeProxy(proxy: IDisposable): void {
      // dispose the proxy
      const disposableClient: IDisposable = proxy as IDisposable;
      if (disposableClient != null)
         disposableClient.dispose();
   }
}
