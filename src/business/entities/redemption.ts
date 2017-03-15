import { EntityBase, IIdentifiableEntity, IAccountOwnedEntity, DateSN, numberN } from "../../core";

//[DataContract]
export class Redemption extends EntityBase implements IIdentifiableEntity, IAccountOwnedEntity {
   // [DataMember]
   RedemptionID: number;
   // [DataMember]
   Amount: number;
   // [DataMember]
   DatePaid: DateSN;
   // [DataMember]
   AccountID: numberN;
   // [DataMember]
   ParticipationID: number;

   // public virtual Account Account      
   // public virtual Participation Participation

   // IIdentifiableEntity
   get EntityID() { return this.RedemptionID; }
   set EntityID(value) { this.RedemptionID = value; }

   // IAccountOwnedEntity
   get OwnerAccountID() { return this.AccountID; }
}
