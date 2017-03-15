using MarketMiner.Business.Entities;
using P.Core.Common.Faults;
using System;
using System.ServiceModel;

namespace MarketMiner.Business.Contracts
{
   [ServiceContract]
   public interface IStrategyService
   {
      #region Operations
      [OperationContract]
      void PostAlgorithmStatusNotification(string message);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      Strategy[] GetStrategies();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      Strategy GetStrategy(int strategyId);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      Strategy UpdateStrategy(Strategy strategy);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      AlgorithmParameter[] GetAlgorithmParameters(int strategyId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      AlgorithmInstance[] GetAlgorithmInstances();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      AlgorithmInstance[] GetAlgorithmInstancesByStrategy(int strategyId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      AlgorithmInstance[] GetAlgorithmInstancesByStatus(short status);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      AlgorithmInstance UpdateAlgorithmInstance(AlgorithmInstance instance);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      AlgorithmMessage UpdateAlgorithmMessage(AlgorithmMessage message);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      StrategyTransaction GetStrategyTransaction(int transactionId);

      [OperationContract]
      StrategyTransaction[] GetStrategyTransactions(int? count, bool? descending);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      StrategyTransaction[] GetStrategyTransactionsCollection(int entryStrategyTransactionId);

      [OperationContract]
      StrategyTransaction[] GetStrategyTransactionsByDateRange(DateTime dateBottom, DateTime? dateTop, int maxTransactions);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      StrategyTransaction SaveStrategyTransaction(StrategyTransaction transaction, string brokerName);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      StrategyTransaction UpdateStrategyTransaction(StrategyTransaction transaction);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      Broker[] GetBrokers();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      Broker GetBroker(int brokerId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      Broker GetBrokerByName(string name);
      #endregion
   }
}
