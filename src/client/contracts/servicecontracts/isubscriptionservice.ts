import * as e from "../../entities";
import { IServiceContract } from "../../../core/index";

export interface ISubscriptionService extends IServiceContract {
   GetSubscriptionsAsync(): Promise<e.Subscription[]>;
   GetSubscriptionsByAccountAsync(accountId: number): Promise<e.Subscription[]>;
   UpdateSubscriptionAsync(subscription: e.Subscription): Promise<e.Subscription>;
   GetSignalAsync(signalId: number): Promise<e.Signal>;
   GetSignalsAsync(): Promise<e.Signal[]>;
   GetActiveSignalsByTypeAsync(type: string): Promise<e.Signal[]>;
   UpdateSignalAsync(signal: e.Signal): Promise<e.Signal>;
   PushSignalToSubscribersAsync(signal: e.Signal): Promise<e.Signal>;
   GetProductsAsync(activesOnly: boolean): Promise<e.Product[]>;
   GetProductByCodeAsync(code: string): Promise<e.Product>;
   GetProductByNameAsync(name: string): Promise<e.Product>;
   UpdateProductAsync(product: e.Product): Promise<e.Product>;
}