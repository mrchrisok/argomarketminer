import { EntityBase, IIdentifiableEntity } from "../../core";

//[DataContract]
export class Strategy extends EntityBase implements IIdentifiableEntity {
   // [DataMember]  
   StrategyID: number;
   // [DataMember]  
   FundID: number;
   // [DataMember] 
   Name: string;
   // [DataMember] 
   ShortDesc: string;
   // [DataMember] 
   LongDesc: string;
   // [DataMember] 
   InitialAUM: number;
   // [DataMember] 
   CurrentAUM: number;
   // [DataMember] 
   MaximumAUM: number;
   // [DataMember] 
   AlgorithmClass: string;
   // [DataMember] 
   AlgorithmAssembly: string;

   // public virtual Fund Fund
   // public virtual List<AlgorithmInstance> AlgorithmInstances
   // public virtual List<AlgorithmParameter> AlgorithmParameters
   // public virtual List<StrategyTransaction> Transactions

   // IIdentifiableEntity
   get EntityID() { return this.StrategyID; }
   set EntityID(value) { this.StrategyID = value; }
}
