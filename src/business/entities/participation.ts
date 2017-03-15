// [DataContract]
import { IIdentifiableEntity, EntityBase, IAccountOwnedEntity } from "../../core";

export class Participation extends EntityBase implements IIdentifiableEntity, IAccountOwnedEntity {
   // [DataMember]
   ParticipationID: number;
   // [DataMember]
   AccountID: number;
   // [DataMember]
   FundID: number;
   // [DataMember]
   InitialBalance: number;
   // [DataMember]
   CurrentBalance: number;

   // public virtual Account Account { get; set; }
   // public virtual Fund Fund { get; set; }
   // public virtual List<Redemption> Redemptions { get; set; }

   // IIdentifiableEntity
   get EntityID() { return this.ParticipationID; }
   set EntityID(value) { this.ParticipationID = value; }

   // IAccountOwnedEntity
   get OwnerAccountID() { return this.AccountID; }
}

