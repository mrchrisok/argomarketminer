import * as e from "../../entities";
import { IServiceContract } from "../../../core/index";

export interface IStrategyService extends IServiceContract {
   PostAlgorithmStatusNotificationAsync(message: string): Promise<void>;
   GetStrategiesAsync(): Promise<e.Strategy[]>;
   GetStrategyAsync(strategyId: number): Promise<e.Strategy>;
   UpdateStrategyAsync(strategy: e.Strategy): Promise<e.Strategy>;
   GetAlgorithmParametersAsync(strategyId: number): Promise<e.AlgorithmParameter[]>;
   GetAlgorithmInstancesAsync(): Promise<e.AlgorithmInstance[]>;
   GetAlgorithmInstancesByStrategyAsync(strategyId: number): Promise<e.AlgorithmInstance[]>;
   GetAlgorithmInstancesByStatusAsync(status: number): Promise<e.AlgorithmInstance[]>;
   UpdateAlgorithmInstanceAsync(instance: e.AlgorithmInstance): Promise<e.AlgorithmInstance>;
   UpdateAlgorithmMessageAsync(message: e.AlgorithmMessage): Promise<e.AlgorithmMessage>;
   GetStrategyTransactionAsync(transactionId: number): Promise<e.StrategyTransaction>;
   GetStrategyTransactionsAsync(ount?: number, descending?: boolean): Promise<e.StrategyTransaction[]>;
   GetStrategyTransactionsCollectionAsync(entryStrategyTransactionId: number): Promise<e.StrategyTransaction[]>;
   GetStrategyTransactionsByDateRangeAsync(dateBottom: Date, dateTop?: Date, maxTransactions?: number): Promise<e.StrategyTransaction[]>;
   UpdateStrategyTransactionAsync(transaction: e.StrategyTransaction): Promise<e.StrategyTransaction>;
   SaveStrategyTransactionAsync(transaction: e.StrategyTransaction, brokerName: string): Promise<e.StrategyTransaction>
   GetBrokersAsync(): Promise<e.Broker[]>;
   GetBrokerAsync(brokerId: number): Promise<e.Broker>;
   GetBrokerByNameAsync(name: string): Promise<e.Broker>;
}