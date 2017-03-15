import { EntityBase, IIdentifiableEntity, DateSN, numberN } from "../../core";
import { ITransaction } from "../../common/index";

//[DataContract]
export class StrategyTransaction extends EntityBase implements IIdentifiableEntity, ITransaction {
   // [DataMember]
   StrategyTransactionID: number;
   // [DataMember]
   StrategyID: number;
   // [DataMember]
   BrokerID: number;
   // [DataMember]
   AccountID: string;
   // [DataMember]
   BrokerTransactionID: string;
   // [DataMember]
   BrokerOrderID: string;
   // [DataMember]
   BrokerTradeID: string;
   // [DataMember]
   Instrument: string;
   // [DataMember]
   Type: string;
   // [DataMember]
   Time: DateSN;
   // [DataMember]
   Side: string;
   // [DataMember]
   Price: number;
   // [DataMember]
   TakeProfit: numberN;
   // [DataMember]
   StopLoss: numberN;

   // public virtual Strategy Strategy
   // public virtual Broker Broker

   // IIdentifiableEntity
   get EntityID() { return this.StrategyTransactionID; }
   set EntityID(value) { this.StrategyTransactionID = value; }
}
