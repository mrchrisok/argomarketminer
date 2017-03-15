import { EntityBase, IIdentifiableEntity, DateSN } from "../../core";

//[DataContract]
export class Communication extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   CommunicationID: number;
   // [DataMember]
   CommunicationTemplateID: number;
   // [DataMember]
   AccountID: number;
   // [DataMember]
   SendType: number;
   // [DataMember]
   Postmark: DateSN;

   // public virtual CommunicationTemplate Template
   // public virtual Account Account

   // IIdentifiableEntity
   get EntityID() { return this.CommunicationID; }
   set EntityID(value) { this.CommunicationID = value; }
}
