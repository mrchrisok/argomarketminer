import { EntityBase, IIdentifiableEntity } from "../../core";

//[DataContract]
export class CommunicationTemplate extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   CommunicationTemplateID: number;
   // [DataMember]
   Name: string;
   // [DataMember]
   Subject: string;
   // [DataMember]
   Body: string;

   // IIdentifiableEntity
   get EntityID() { return this.CommunicationTemplateID; }
   set EntityID(value) { this.CommunicationTemplateID = value; }
}
