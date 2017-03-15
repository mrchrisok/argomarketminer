import { EntityBase, IIdentifiableEntity, DateSN } from "../../core";

//[DataContract]
export class Fund extends EntityBase implements IIdentifiableEntity {
   // [DataMember]
   FundID: number;
   // [DataMember]
   Name: string;
   // [DataMember]
   OpenDate: DateSN;
   // [DataMember]
   CloseDate: DateSN;
   // [DataMember]
   OpenToNew: boolean;
   // [DataMember]
   OpenToAdd: boolean;
   // [DataMember]
   OpenToRedeem: boolean;

   // public virtual List<Strategy> Strategies
   // public virtual List<Participation> Participations
   // public virtual List<Allocation> Allocations

   // IIdentifiableEntity
   get EntityID() { return this.FundID; }
   set EntityID(value) { this.FundID = value; }
}
