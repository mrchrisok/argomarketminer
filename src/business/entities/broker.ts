import { EntityBase, IIdentifiableEntity } from "../../core";

//[DataContract]
export class Broker extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   BrokerID: number;
   // [DataMember]
   Name: string;

   // IIdentifiableEntity
   get EntityID() { return this.BrokerID; }
   set EntityID(value) { this.BrokerID = value; }
}
