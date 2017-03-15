import { EntityBase, IIdentifiableEntity, TraceEventType } from "../../core";

// [DataContract]
export class AlgorithmMessage extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   AlgorithmMessageID: number;
   // [DataMember]
   AlgorithmInstanceID: number;
   // [DataMember]
   Message: string;
   // [DataMember]
   Severity: TraceEventType;

   // public virtual AlgorithmInstance AlgorithmInstance

   // IIdentifiableEntity
   get EntityID() { return this.AlgorithmMessageID; }
   set EntityID(value) { this.AlgorithmMessageID = value; }
}
