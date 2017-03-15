import * as moment from "moment";
import { DateN, DateNU } from "../index";

export function IsValidDate(value: Date | string | null | undefined, throwError?: boolean): boolean {
   if (value instanceof Date) {
      return true;
   } else if (typeof value === "string") {
      return moment(value, "yyyy-MM-ddTHH:mm:ssZ", true).isValid();
   } else if (typeof value === null) {
      return true;
   } else if (typeof value === undefined) {
      return true;
   }

   if (throwError) throw new TypeError("Parameter 'value' is not a Date or convertible to a Date.")

   return false;
}

export function ConvertToDateN(value: Date | string | null, throwError?: boolean): DateN {
   if (this.IsValidDate(value, throwError)) {
      if (value instanceof Date) {
         return value as DateN
      } else if (typeof value === "string") {
         return new Date(value) as DateN;
      }
   }

   return null;
}

export function ConvertToDateNU(value: Date | string | null | undefined, throwError?: boolean): DateNU {
   if (this.IsValidDate(value, throwError)) {
      if (value instanceof Date) {
         return value;
      } else if (typeof value === "string") {
         return new Date(value);
      } else if (typeof value === null) {
         return null;
      }
   }
}