import { IExtensibleDataObject, IDateTracking } from "../contracts";
import { StringDex, DateN } from "./types";
import { Container } from "inversify";

// [DataContract]
export abstract class EntityBase implements IDateTracking, IExtensibleDataObject {
   DateCreated: DateN;
   DateModified: DateN;
   ExtensionData: StringDex<any>
   static Container: Container;
}

