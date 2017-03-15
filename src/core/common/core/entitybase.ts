import { IExtensibleDataObject, IDateTracking } from "../contracts";
import { StringDex, DateN } from "./types";

// [DataContract]
export abstract class EntityBase implements IDateTracking, IExtensibleDataObject {
   DateCreated: DateN;
   DateModified: DateN;
   ExtensionData: StringDex<any>
}

