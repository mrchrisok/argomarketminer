import { ServiceCaller } from "./servicecaller";
import { Signal, Product, ISubscriptionService } from "../../index";
//

export class SubscriptionCaller extends ServiceCaller {
   static Instance() { return new SubscriptionCaller(); }

   private _signalResult: Signal;
   private _signalResults: Signal[];
   private _productResult: Product;
   private _productResults: Product[];

   async GetSignalAsync(signalId: number): Promise<Signal> {
      await this.WithSubscriptionClientAsync(async subscriptionClient => {
         this._signalResult = await subscriptionClient.GetSignalAsync(signalId);
      });
      return this._signalResult;
   }

   async GetActiveSignalsByTypeAsync(type: string): Promise<Signal[]> {
      await this.WithSubscriptionClientAsync(async subscriptionClient => {
         this._signalResults = await subscriptionClient.GetActiveSignalsByTypeAsync(type);
      });
      return this._signalResults;
   }

   async UpdateSignalAsync(signal: Signal): Promise<Signal> {
      await this.WithSubscriptionClientAsync(async subscriptionClient => {
         this._signalResult = await subscriptionClient.UpdateSignalAsync(signal);
      });
      return this._signalResult;
   }

   async PushSignalToSubscribersAsync(signal: Signal): Promise<Signal> {
      await this.WithSubscriptionClientAsync(async subscriptionClient => {
         this._signalResult = await subscriptionClient.PushSignalToSubscribersAsync(signal);
      });
      return this._signalResult;
   }

   async GetProductsAsync(activesOnly: boolean): Promise<Product[]> {
      await this.WithSubscriptionClientAsync(async subscriptionClient => {
         this._productResults = await subscriptionClient.GetProductsAsync(activesOnly);
      });
      return this._productResults;
   }

   async GetProductByNameAsync(name: string): Promise<Product> {
      await this.WithSubscriptionClientAsync(async subscriptionClient => {
         this._productResult = await subscriptionClient.GetProductByNameAsync(name);
      });
      return this._productResult;
   }

   // utilities
   protected async WithSubscriptionClientAsync(codeToExecute: (service: ISubscriptionService) => Promise<void>): Promise<void> {
      await this.WithClientAsync<ISubscriptionService>(this._serviceFactory.CreateClient<ISubscriptionService>(), codeToExecute);
   }
}
