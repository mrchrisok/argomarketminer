import { EntityBase, IIdentifiableEntity, DateSN, numberN } from "../../core";

//[DataContract]
export class Signal extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   SignalID: number;
   // [DataMember]
   ProductID: number;
   // [DataMember]
   StrategyTransactionID: numberN;
   // [DataMember]
   Type: string;
   // [DataMember]
   Instrument: string;
   // [DataMember]
   Granularity: string;
   // [DataMember]
   Side: string;
   // [DataMember]
   SignalPrice: number;
   // [DataMember]
   SignalTime: string;
   // [DataMember]
   SendPostmark: DateSN;
   // [DataMember]
   Active: boolean;

   // public virtual Product Product
   // public virtual StrategyTransaction StrategyTransaction

   // IIdentifiableEntity
   get EntityID() { return this.SignalID; }
   set EntityID(value) { this.SignalID = value; }
}
