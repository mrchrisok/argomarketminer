using MarketMiner.Business.Entities;
using MarketMiner.Common.Faults;
using P.Core.Common.Faults;
using System.ServiceModel;

namespace MarketMiner.Business.Contracts
{
   [ServiceContract]
   public interface ISubscriptionService
   {
      #region Operations
      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Subscription[] GetSubscriptions();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Subscription[] GetSubscriptionsByAccount(int accountId);

      [OperationContract]
      [FaultContract(typeof(AuthorizationValidationFault))]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      Subscription UpdateSubscription(Subscription subscription);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Signal[] GetSignals();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Signal GetSignal(int signalId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Signal[] GetActiveSignalsByType(string type);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      Signal UpdateSignal(Signal signal);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      Signal PushSignalToSubscribers(Signal signal);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Product[] GetProducts(bool activesOnly = true);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Product GetProductByCode(string code);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Product GetProductByName(string name);

      [OperationContract]
      [FaultContract(typeof(EntityValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      Product UpdateProduct(Product product);
      #endregion
   }
}
