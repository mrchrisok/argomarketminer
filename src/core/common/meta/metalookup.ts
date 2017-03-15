import { EntityBase, IIdentifiableEntity } from "../index";

export class MetaLookup extends EntityBase implements IIdentifiableEntity {
   MetaLookupID; number;
   Type: string;
   Code: string;
   ShortDesc: string;
   LongDesc: string;
   SortOrder: number;
   Enabled: boolean;

   // IIdentifiableEntity
   // [IgnoreDataMember]
   get EntityID() { return this.MetaLookupID; }
   set EntityID(value) { this.MetaLookupID = value; }
}
