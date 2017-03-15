import { EntityBase, IIdentifiableEntity, IAccountOwnedEntity, DateSN } from "../../core";

// [DataContract]
export class Account extends EntityBase implements IIdentifiableEntity, IAccountOwnedEntity {
   // [DataMember]
   AccountID: number;
   // [DataMember]
   LoginEmail: string;
   // [DataMember]
   FirstName: string;
   // [DataMember]
   LastName: string;
   // [DataMember]
   Address: string;
   // [DataMember]
   City: string;
   // [DataMember]
   State: string;
   // [DataMember]
   ZipCode: string;
   // [DataMember]
   CreditCard: string;
   // [DataMember]
   ExpDate: DateSN;

   // public virtual List<Subscription> Subscriptions
   // public virtual List<Participation> Participations
   // public virtual List<Reservation> Reservations
   // public virtual List<Redemption> Redemptions

   // IIdentifiableEntity
   get EntityID() { return this.AccountID; }
   set EntityID(value) { this.AccountID = value; }

   // IAccountOwnedEntity
   get OwnerAccountID() { return this.AccountID; }
}
