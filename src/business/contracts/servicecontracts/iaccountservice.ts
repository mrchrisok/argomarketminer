// [ServiceContract]
export interface IAccountService {
   // [OperationContract]
   // [FaultContract(typeof(NotFoundFault))]
   // [FaultContract(typeof(AuthorizationValidationFault))]
   GetAccount(loginEmail: string): Account;

   // [OperationContract]
   // [FaultContract(typeof(AuthorizationValidationFault))]
   // [FaultContract(typeof(EntityValidationFault))]
   // [TransactionFlow(TransactionFlowOption.Allowed)]
   UpdateAccount(account: Account): void;
}
