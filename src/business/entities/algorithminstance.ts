import { DateSN, EntityBase, IIdentifiableEntity } from "../../core";

// [DataContract]
export class AlgorithmInstance extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   AlgorithmInstanceID: number;
   // [DataMember]
   StrategyID: number;
   // [DataMember]
   Status: number;
   // [DataMember]
   FirstTradeDateTime: DateSN;
   // [DataMember]
   LastTradeDateTime: DateSN;
   // [DataMember]
   RunStartDateTime: DateSN;
   // [DataMember]
   RunStopDateTime: DateSN;

   // public virtual Strategy Strategy
   // public virtual List<AlgorithmMessage> Messages

   // IIdentifiableEntity
   get EntityID() { return this.AlgorithmInstanceID; }
   set EntityID(value) { this.AlgorithmInstanceID = value; }
}
