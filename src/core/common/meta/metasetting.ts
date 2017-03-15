import { EntityBase, IIdentifiableEntity } from "../index";

export class MetaSetting extends EntityBase implements IIdentifiableEntity {
   MetaSettingID: number;
   Environment: string;
   Type: string;
   Code: string;
   Value: string;
   SortOrder: boolean;
   Enabled: boolean;

   // IIdentifiableEntity
   // [IgnoreDataMember]
   get EntityID() { return this.MetaSettingID; }
   set EntityID(value) { this.MetaSettingID = value; }
}
