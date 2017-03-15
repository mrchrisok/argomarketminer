import { EntityBase, IIdentifiableEntity, IAccountOwnedEntity } from "../../core";

//[DataContract]
export class Reservation extends EntityBase implements IIdentifiableEntity, IAccountOwnedEntity {
   // [DataMember]
   ReservationID: number;
   // [DataMember]
   AccountID: number;
   // [DataMember]
   Amount: number;
   // [DataMember]
   Open: boolean;
   // [DataMember]
   Cancelled: boolean;

   // public virtual Account Account      
   // public virtual List<Allocation> Allocations

   // IIdentifiableEntity
   get EntityID() { return this.ReservationID; }
   set EntityID(value) { this.ReservationID = value; }

   // IAccountOwnedEntity
   get OwnerAccountID() { return this.AccountID; }
}
