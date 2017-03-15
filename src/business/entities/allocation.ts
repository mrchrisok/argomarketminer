import { EntityBase, IIdentifiableEntity } from "../../core";

//[DataContract]
export class Allocation extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   AllocationID: number;
   // [DataMember]
   ReservationID: number;
   // [DataMember]
   FundID: number;
   // [DataMember]
   Amount: number
   // [DataMember]
   Pushed: boolean;

   // public virtual Reservation Reservation { get; set; }
   // public virtual Fund Fund { get; set; }

   // Members.IIdentifiableEntity
   get EntityID() { return this.AllocationID; }
   set EntityID(value) { this.AllocationID = value; }
}
