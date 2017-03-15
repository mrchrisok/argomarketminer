import { ISubscriptionService } from "../../contracts/servicecontracts";
import { ClientBase } from "../../../core/common/servicemodel";
import * as e from "../../entities";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import { IConfiguration } from "../../../core/common/contracts/iconfiguration";
import { ILogger } from "../../../core/index";

@injectable()
export class SubscriptionClient extends ClientBase implements ISubscriptionService {
   constructor(
      @inject("AppConfig") _config: IConfiguration,
      @inject("") logger: ILogger
   ) {
      super(_config, "IStrategyService");
      this._logger = logger;
   }

   async GetSubscriptionsAsync(): Promise<e.Subscription[]> {
      let subscriptions;
      const options = { url: "GetSubscriptions" }
      function callback(body: any): void { subscriptions = body.map(x => Object.assign(new e.Subscription(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return subscriptions as e.Subscription[];
   }

   async GetSubscriptionsByAccountAsync(accountId: number): Promise<e.Subscription[]> {
      let subscriptions;
      const body = { accountId: accountId };
      const options = { url: "GetSubscriptionsByAccount", body: body }
      function callback(body: any): void { subscriptions = body.map(x => Object.assign(new e.Subscription(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return subscriptions as e.Subscription[];
   }

   async UpdateSubscriptionAsync(subscription: e.Subscription): Promise<e.Subscription> {
      const body = { subscription: JSON.stringify(subscription) };
      const options = { url: "UpdateSubscription", body: body }
      function callback(body: any): void { subscription = Object.assign(body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return subscription;
   }

   async GetSignalAsync(signalId: number): Promise<e.Signal> {
      let signal;
      const body = { signalId: signalId };
      const options = { url: "GetSignal", body: body }
      function callback(body: any): void { signal = Object.assign(body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return signal as e.Signal;
   }

   async GetSignalsAsync(): Promise<e.Signal[]> {
      let signals;
      const options = { url: "GetSignals" }
      function callback(body: any): void { signals = body.map(x => Object.assign(new e.Signal(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return signals as e.Signal[];
   }

   async GetActiveSignalsByTypeAsync(type: string): Promise<e.Signal[]> {
      let signals;
      const body = { type: type };
      const options = { url: "GetSignalsByType", body: body }
      function callback(body: any): void { signals = body.map(x => Object.assign(new e.Signal(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return signals as e.Signal[];
   }

   async UpdateSignalAsync(signal: e.Signal): Promise<e.Signal> {
      const body = { subscription: JSON.stringify(signal) };
      const options = { url: "UpdateSignal", body: body }
      function callback(body: any): void { signal = Object.assign(body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return signal;
   }

   async PushSignalToSubscribersAsync(signal: e.Signal): Promise<e.Signal> {
      const body = { subscription: JSON.stringify(signal) };
      const options = { url: "PushSignalToSubscribers", body: body }
      function callback(body: any): void { signal = Object.assign(body); }
      await this.Post(options, this.GetResponseHandler(callback));
      return signal;
   }

   async GetProductsAsync(activesOnly: boolean = true): Promise<e.Product[]> {
      let products;
      const body = { activesOnly: activesOnly };
      const options = { url: "GetProducts", body: body }
      function callback(body: any): void { products = body.map(x => Object.assign(new e.Product(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return products as e.Product[];
   }

   async GetProductByCodeAsync(code: string): Promise<e.Product> {
      let product;
      const body = { code: code };
      const options = { url: "GetProductByCode", body: body }
      function callback(body: any): void { product = Object.assign(new e.Product(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return product as e.Product;
   }

   async GetProductByNameAsync(name: string): Promise<e.Product> {
      let product;
      const body = { name: name };
      const options = { url: "GetProductByName", body: body }
      function callback(body: any): void { product = Object.assign(new e.Product(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return product as e.Product;
   }

   async UpdateProductAsync(product: e.Product): Promise<e.Product> {
      const body = { subscription: JSON.stringify(product) };
      const options = { url: "UpdateProduct", body: body }
      function callback(body: any): void { product = Object.assign(product, body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return product;
   }
}