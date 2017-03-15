using MarketMiner.Business.Entities;
using MarketMiner.Common.Faults;
using P.Core.Common.Faults;
using System.ServiceModel;

namespace MarketMiner.Business.Contracts
{
   [ServiceContract]
   public interface IParticipationService
   {
      [OperationContract]
      [FaultContract(typeof(FundFault))]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(EntityValidationFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      Reservation UpdateReservation(Reservation reservation);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Reservation GetReservation(int reservationId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Reservation[] GetActiveReservations();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Reservation[] GetReservationsByAccount(string loginEmail);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Reservation[] GetCancelledReservations();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      void CancelReservation(int reservationId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      [FaultContract(typeof(FundFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      void ExecuteParticipationsFromReservation(int reservationId);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      [TransactionFlow(TransactionFlowOption.Allowed)]
      void RedeemParticipation(string loginEmail, int participationId, decimal amount);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Participation[] GetParticipationsByAccount(string loginEmail);

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Participation[] GetParticipations();

      [OperationContract]
      [FaultContract(typeof(NotFoundFault))]
      [FaultContract(typeof(AuthorizationValidationFault))]
      Participation GetParticipation(int participationId);

      [OperationContract]
      bool IsStrategyAcceptingParticipations(int strategyId);
   }
}
