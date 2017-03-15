import { DateSN } from "../index";

export interface IDateTracking {
   /// <summary>
   /// Gets or sets the date and time the object was created.
   /// </summary>
   DateCreated: DateSN

   /// <summary>
   /// Gets or sets the date and time the object was last modified.
   /// </summary>
   DateModified: DateSN
}