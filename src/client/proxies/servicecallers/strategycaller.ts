import * as ce from "../../entities";
import { ServiceCaller } from "./servicecaller";
import { IStrategyService } from "../../contracts";
import { DateN } from "../../../core/common/core";
//

export class StrategyCaller extends ServiceCaller {

   static Instance(): StrategyCaller { return new StrategyCaller(); }

   private _strategyResult: ce.Strategy;
   private _algorithmInstanceResult: ce.AlgorithmInstance;
   private _algorithmMessageResult: ce.AlgorithmMessage;
   private _transactionResult: ce.StrategyTransaction;

   private _parameterResults: ce.AlgorithmParameter[];
   private _transactionResults: ce.StrategyTransaction[];
   //

   //    async PostAlgorithmStatusNotificationAsync(message: string): Promise<void> {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          await strategyClient.PostAlgorithmStatusNotificationAsync(message);
   //       });
   //    }

   //    async GetAlgorithmParametersAsync(strategyId: number): Promise<AlgorithmParameter[]> {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          _parameterResults = await strategyClient.GetAlgorithmParametersAsync(strategyId);
   //       });
   //       return _parameterResults;
   //    }

   //    public async Task<AlgorithmInstance> UpdateAlgorithmInstanceAsync(AlgorithmInstance instance) {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          _algorithmInstanceResult = await strategyClient.UpdateAlgorithmInstanceAsync(instance);
   //       });
   //       return _algorithmInstanceResult;
   //    }

   //    public async Task<AlgorithmMessage> UpdateAlgorithmMessageAsync(AlgorithmMessage message) {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          _algorithmMessageResult = await strategyClient.UpdateAlgorithmMessageAsync(message);
   //       });
   //       return _algorithmMessageResult;
   //    }

   //    public async Task<StrategyTransaction> GetStrategyTransactionAsync(int transactionId) {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          _transactionResult = await strategyClient.GetStrategyTransactionAsync(transactionId);
   //       });
   //       return _transactionResult;
   //    }

   //    public async Task<StrategyTransaction> SaveStrategyTransactionAsync(StrategyTransaction transaction, string brokerName) {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          _transactionResult = await strategyClient.SaveStrategyTransactionAsync(transaction, brokerName);
   //       });
   //       return _transactionResult;
   //    }

   //    public async Task<StrategyTransaction> UpdateStrategyTransactionAsync(StrategyTransaction transaction) {
   //       await WithStrategyClientAsync(async strategyClient => {
   //          _transactionResult = await strategyClient.UpdateStrategyTransactionAsync(transaction);
   //       });
   //       return _transactionResult;
   //    }

   //    public async Task<StrategyTransaction[] > GetStrategyTransactionsAsync(int ? count, bool ? descending)
   // {
   //    await WithStrategyClientAsync(async strategyClient => {
   //       _transactionResults = await strategyClient.GetStrategyTransactionsAsync(count, descending);
   //    });
   //    return _transactionResults;
   // }

   //       public async Task< StrategyTransaction[] > GetStrategyTransactionsCollectionAsync(int entryStrategyTransactionId)
   // {
   //    await WithStrategyClientAsync(async strategyClient => {
   //       _transactionResults = await strategyClient.GetStrategyTransactionsCollectionAsync(entryStrategyTransactionId);
   //    });
   //    return _transactionResults;
   // }

   async GetStrategyTransactionsByDateRangeAsync(dateBottom: Date, dateTop: DateN, maxTransactions: number): Promise<ce.StrategyTransaction[]> {
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