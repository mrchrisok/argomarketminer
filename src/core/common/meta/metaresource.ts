import { EntityBase, IIdentifiableEntity } from "../index";

export class MetaResource extends EntityBase implements IIdentifiableEntity {
   MetaResourceID: number;
   Set: string;
   Type: string;
   Key: string;
   Value: string;
   Category: string;
   CultureCode: string;
   Translated: boolean;
   Enabled: boolean;

   // IIdentifiableEntity
   // [IgnoreDataMember]
   get EntityID() { return this.MetaResourceID; }
   set EntityID(value) { this.MetaResourceID = value; }
}
