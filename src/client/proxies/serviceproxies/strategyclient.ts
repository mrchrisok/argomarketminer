import { IStrategyService } from "../../contracts/servicecontracts";
import { ClientBase } from "../../../core/common/servicemodel";
import * as e from "../../entities";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import { IConfiguration } from "../../../core/common/contracts/iconfiguration";
import { ILogger } from "../../../core/index";

@injectable()
export class StrategyClient extends ClientBase implements IStrategyService {
   constructor(
      @inject("AppConfig") _config: IConfiguration,
      @inject("") logger: ILogger
   ) {
      super(_config, "IStrategyService");
      this._logger = logger;
   }

   async PostAlgorithmStatusNotificationAsync(message: string): Promise<void> {
      const body = { message: message };
      const options = { url: "PostAlgorithmStatusNotification", body: body }
      await this.Post(options, undefined);
   }

   async GetStrategiesAsync(): Promise<e.Strategy[]> {
      let strategies;
      const options = { url: "GetStrategies" }
      function callback(body: any): void { strategies = body.map(x => Object.assign(new e.Strategy(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return strategies as e.Strategy[];
   }

   async GetStrategyAsync(strategyId: number): Promise<e.Strategy> {
      let strategy;
      const body = { strategyId: strategyId };
      const options = { url: "GetStrategy", body: body }
      function callback(body: any): void { strategy = Object.assign(strategy, body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return strategy;
   }

   async UpdateStrategyAsync(strategy: e.Strategy): Promise<e.Strategy> {
      const body = { strategy: JSON.stringify(strategy) };
      const options = { url: "UpdateStrategy", body: body }
      function callback(body: any): void { strategy = Object.assign(strategy, body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return strategy;
   }

   async GetAlgorithmParametersAsync(strategyId: number): Promise<e.AlgorithmParameter[]> {
      let parameters;
      const body = { strategyId: strategyId };
      const options = { url: "GetAlgorithmParameters", body: body }
      function callback(body: any): void { parameters = body.map(x => Object.assign(new e.AlgorithmParameter(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return parameters as e.AlgorithmParameter[];
   }

   async GetAlgorithmInstancesAsync(): Promise<e.AlgorithmInstance[]> {
      let instances;
      const options = { url: "GetAlgorithmInstances" }
      function callback(body: any): void { instances = body.map(x => Object.assign(new e.AlgorithmInstance(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return instances as e.AlgorithmInstance[];
   }

   async GetAlgorithmInstancesByStrategyAsync(strategyId: number): Promise<e.AlgorithmInstance[]> {
      let instances;
      const body = { strategyId: strategyId };
      const options = { url: "GetAlgorithmInstancesByStrategy", body: body }
      function callback(body: any): void { instances = body.map(x => Object.assign(new e.AlgorithmInstance(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return instances as e.AlgorithmInstance[];
   }

   async GetAlgorithmInstancesByStatusAsync(status: number): Promise<e.AlgorithmInstance[]> {
      let instances;
      const body = { status: status };
      const options = { url: "GetAlgorithmInstancesByStatus", body: body }
      function callback(body: any): void { instances = body.map(x => Object.assign(new e.AlgorithmInstance(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return instances as e.AlgorithmInstance[];
   }

   async UpdateAlgorithmInstanceAsync(instance: e.AlgorithmInstance): Promise<e.AlgorithmInstance> {
      const body = { instance: JSON.stringify(instance) };
      const options = { url: "UpdateAlgorithmInstance", body: body }
      function callback(body: any): void { instance = Object.assign(instance, body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return instance;
   }

   async UpdateAlgorithmMessageAsync(message: e.AlgorithmMessage): Promise<e.AlgorithmMessage> {
      const body = { message: JSON.stringify(message) };
      const options = { url: "UpdateAlgorithmMessage", body: body }
      function callback(body: any): void { message = Object.assign(message, body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return message;
   }

   async GetStrategyTransactionAsync(transactionId: number): Promise<e.StrategyTransaction> {
      let transaction;
      const body = { transactionId: transactionId };
      const options = { url: "GetStrategyTransaction", body: body }
      function callback(body: any): void { transaction = Object.assign(new e.StrategyTransaction(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return transaction as e.StrategyTransaction;
   }

   async GetStrategyTransactionsAsync(count?: number, descending?: boolean): Promise<e.StrategyTransaction[]> {
      let transactions;
      const body = { count: count, descending: descending };
      const options = { url: "GetStrategyTransactionsCollection", body: body }
      function callback(body: any): void { transactions = body.map(x => Object.assign(new e.StrategyTransaction(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return transactions as e.StrategyTransaction[];
   }

   async GetStrategyTransactionsCollectionAsync(entryStrategyTransactionId: number): Promise<e.StrategyTransaction[]> {
      let transactions;
      const body = { entryStrategyTransactionId: entryStrategyTransactionId };
      const options = { url: "GetStrategyTransactionsCollection", body: body }
      function callback(body: any): void { transactions = body.map(x => Object.assign(new e.StrategyTransaction(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return transactions as e.StrategyTransaction[];
   }

   async GetStrategyTransactionsByDateRangeAsync(dateBottom: Date, dateTop?: Date, maxTransactions?: number): Promise<e.StrategyTransaction[]> {
      let transactions;
      const body = { dateBottom: dateBottom, dateTop: dateTop, maxTransactions: maxTransactions };
      const options = { url: "GetStrategyTransactionsByDateRange", body: body }
      function callback(body: any): void { transactions = body.map(x => Object.assign(new e.StrategyTransaction(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return transactions as e.StrategyTransaction[];
   }

   async UpdateStrategyTransactionAsync(transaction: e.StrategyTransaction): Promise<e.StrategyTransaction> {
      const body = { transaction: JSON.stringify(transaction) };
      const options = { url: "SaveStrategyTransaction", body: body }
      function callback(body: any): void { transaction = Object.assign(transaction, body); }
      await this.Patch(options, this.GetResponseHandler(callback));
      return transaction;
   }

   async SaveStrategyTransactionAsync(transaction: e.StrategyTransaction, brokerName: string): Promise<e.StrategyTransaction> {
      const body = { transaction: JSON.stringify(transaction), brokerName: brokerName };
      const options = { url: "SaveStrategyTransaction", body: body }
      function callback(body: any): void { transaction = Object.assign(transaction, body); }
      await this.Post(options, this.GetResponseHandler(callback));
      return transaction;
   }

   async GetBrokersAsync(): Promise<e.Broker[]> {
      let brokers;
      const options = { url: "GetBrokers" }
      function callback(body: any): void { brokers = body.map(x => Object.assign(new e.Broker(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return brokers as e.Broker[];
   }

   async GetBrokerAsync(brokerId: number): Promise<e.Broker> {
      let broker;
      const body = { brokerId: brokerId };
      const options = { url: "GetBroker", body: body }
      function callback(body: any): void { broker = Object.assign(new e.Broker(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return broker as e.Broker;
   }

   async GetBrokerByNameAsync(name: string): Promise<e.Broker> {
      let broker;
      const body = { name: name };
      const options = { url: "GetBrokerByName", body: body }
      function callback(body: any): void { broker = body.map(x => Object.assign(new e.Broker(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return broker as e.Broker;
   }
}