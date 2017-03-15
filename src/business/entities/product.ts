import { EntityBase, IIdentifiableEntity } from "../../core";

//[DataContract]
export class Product extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   ProductID: number;
   // [DataMember]
   Name: string;
   // [DataMember]
   Code: string;
   // [DataMember]
   ShortDesc: string;
   // [DataMember]
   LongDesc: string;
   // [DataMember]
   Active: boolean;

   // public virtual List<Subscription> Subscriptions

   // IIdentifiableEntity
   get EntityID() { return this.ProductID; }
   set EntityID(value) { this.ProductID = value; }
}
