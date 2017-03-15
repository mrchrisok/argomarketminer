import { EntityBase, IIdentifiableEntity } from "../index";

export class MetaFieldDefinition extends EntityBase implements IIdentifiableEntity {
   MetaFieldDefinitionID: number;
   TableName: string;
   FieldName: string;
   Caption: string;
   LookupTable: string;
   LookupDescriptionType: string;
   LookupDescriptionFormat: string;
   FormatType: string;
   MaximumValue: string;
   MaximumLength: string;
   RegularExpression: string;
   Required: boolean;
   ReadPermissionId: string;
   EditPermissionId: string;
   Enabled: boolean;

   // IIdentifiableEntity
   // [IgnoreDataMember]
   get EntityID() { return this.MetaFieldDefinitionID; }
   set EntityID(value) { this.MetaFieldDefinitionID = value; }
}
