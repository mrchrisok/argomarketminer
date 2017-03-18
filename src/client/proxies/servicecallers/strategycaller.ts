import * as e from "../../entities";
import { ServiceCaller } from "./servicecaller";
import { IStrategyService } from "../../contracts";
//

export class StrategyCaller extends ServiceCaller {

   static Instance(): StrategyCaller { return new StrategyCaller(); }

   private _strategyResult: e.Strategy;
   private _algorithmInstanceResult: e.AlgorithmInstance;
   private _algorithmMessageResult: e.AlgorithmMessage;
   private _transactionResult: e.StrategyTransaction;
   private _transactionResults: e.StrategyTransaction[];
   private _parameterResults: e.AlgorithmParameter[];
   //

   async PostAlgorithmStatusNotificationAsync(message: string): Promise<void> {
      await this.WithStrategyClientAsync(async strategyClient => {
         await strategyClient.PostAlgorithmStatusNotificationAsync(message);
      });
   }

   async GetAlgorithmParametersAsync(strategyId: number): Promise<e.AlgorithmParameter[]> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._parameterResults = await strategyClient.GetAlgorithmParametersAsync(strategyId);
      });
      return this._parameterResults;
   }

   async GetStrategyAsync(strategyId: number): Promise<e.Strategy> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._strategyResult = await strategyClient.GetStrategyAsync(strategyId);
      });
      return this._strategyResult;
   }

   async UpdateAlgorithmInstanceAsync(instance: e.AlgorithmInstance): Promise<e.AlgorithmInstance> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._algorithmInstanceResult = await strategyClient.UpdateAlgorithmInstanceAsync(instance);
      });
      return this._algorithmInstanceResult;
   }

   async UpdateAlgorithmMessageAsync(message: e.AlgorithmMessage): Promise<e.AlgorithmMessage> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._algorithmMessageResult = await strategyClient.UpdateAlgorithmMessageAsync(message);
      });
      return this._algorithmMessageResult;
   }

   async GetStrategyTransactionAsync(transactionId: number): Promise<e.StrategyTransaction> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._transactionResult = await strategyClient.GetStrategyTransactionAsync(transactionId);
      });
      return this._transactionResult;
   }

   async SaveStrategyTransactionAsync(transaction: e.StrategyTransaction, brokerName: string): Promise<e.StrategyTransaction> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._transactionResult = await strategyClient.SaveStrategyTransactionAsync(transaction, brokerName);
      });
      return this._transactionResult;
   }

   async UpdateStrategyTransactionAsync(transaction: e.StrategyTransaction): Promise<e.StrategyTransaction> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._transactionResult = await strategyClient.UpdateStrategyTransactionAsync(transaction);
      });
      return this._transactionResult;
   }

   async GetStrategyTransactionsAsync(count?: number, descending?: boolean): Promise<e.StrategyTransaction[]> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._transactionResults = await strategyClient.GetStrategyTransactionsAsync(count, descending);
      });
      return this._transactionResults;
   }

   async  GetStrategyTransactionsCollectionAsync(entryStrategyTransactionId: number): Promise<e.StrategyTransaction[]> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._transactionResults = await strategyClient.GetStrategyTransactionsCollectionAsync(entryStrategyTransactionId);
      });
      return this._transactionResults;
   }

   async GetStrategyTransactionsByDateRangeAsync(dateBottom: Date, dateTop: Date, maxTransactions: number): Promise<e.StrategyTransaction[]> {
      await this.WithStrategyClientAsync(async strategyClient => {
         this._transactionResults = await strategyClient.GetStrategyTransactionsByDateRangeAsync(dateBottom, dateTop, maxTransactions);
      });
      return this._transactionResults;
   }

   // utilities
   protected async WithStrategyClientAsync(codeToExecute: (service: IStrategyService) => Promise<void>): Promise<void> {
      await this.WithClientAsync<IStrategyService>(this._serviceFactory.CreateClient<IStrategyService>(), codeToExecute);
   }
}