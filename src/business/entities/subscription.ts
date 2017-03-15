import { EntityBase, IIdentifiableEntity, IAccountOwnedEntity } from "../../core";

//[DataContract]
export class Subscription extends EntityBase implements IIdentifiableEntity, IAccountOwnedEntity {
   // [DataMember]
   SubscriptionID: number;
   // [DataMember]
   AccountID: number;
   // [DataMember]
   ProductID: number;
   // [DataMember]
   Active: boolean;

   // public virtual Account Account
   // public virtual Product Product

   // IIdentifiableEntity
   get EntityID() { return this.SubscriptionID; }
   set EntityID(value) { this.SubscriptionID = value; }

   // IAccountOwnedEntity
   get OwnerAccountID() { return this.AccountID; }
}
