import { EntityBase, IIdentifiableEntity } from "../../core/index";

// [DataContract]
export class AlgorithmParameter extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   AlgorithmParameterID: number;
   // [DataMember]
   StrategyID: number;
   // [DataMember]
   ParameterName: string;
   // [DataMember]
   ParameterValue: string;
   // [DataMember]
   ParameterType: string;

   // public virtual Strategy Strategy

   // IIdentifiableEntity
   get EntityID() { return this.AlgorithmParameterID; }
   set EntityID(value) { this.AlgorithmParameterID = value; }
}
