import { ObjectBase, DateSN } from "../../core";
import { ConvertToDateN } from "../../core/common/utils/dates";
//

export class Account extends ObjectBase {
   private _AccountId: number;
   private _LoginEmail: string;
   private _FirstName: string;
   private _LastName: string;
   private _Address: string;
   private _City: string;
   private _State: string;
   private _ZipCode: string;
   private _CreditCard: string;
   private _ExpDate: DateSN;

   get AccountId() { return this._AccountId; }
   set AccountId(value) {
      if (this._AccountId != value) { this._AccountId = value; this.OnPropertyChanged(value);
      }
   }

   get LoginEmail() { return this._LoginEmail; }
   set LoginEmail(value) {
      if (this._LoginEmail != value) { this._LoginEmail = value; this.OnPropertyChanged(value);
      }
   }

   get FirstName() { return this._FirstName; }
   set FirstName(value) {
      if (this._FirstName != value) { this._FirstName = value; this.OnPropertyChanged(value);
      }
   }

   get LastName() { return this._LastName; }
   set LastName(value) {
      if (this._LastName != value) { this._LastName = value; this.OnPropertyChanged(value);
      }
   }

   get Address() { return this._Address; }
   set Address(value) {
      if (this._Address != value) { this._Address = value; this.OnPropertyChanged(value);
      }
   }

   get City() { return this._City; }
   set City(value) {
      if (this._City != value) { this._City = value; this.OnPropertyChanged(value);
      }
   }

   get State() { return this._State; }
   set State(value) {
      if (this._State != value) { this._State = value; this.OnPropertyChanged(value);
      }
   }

   get ZipCode() { return this._ZipCode; }
   set ZipCode(value) {
      if (this._ZipCode != value) { this._ZipCode = value; this.OnPropertyChanged(value);
      }
   }

   get CreditCard() { return this._CreditCard; }
   set CreditCard(value) {
      if (this._CreditCard != value) { this._CreditCard = value; this.OnPropertyChanged(value);
      }
   }

   get ExpDate() { return this._ExpDate; }
   set ExpDate(value) {
      if (this._ExpDate != value) { this._ExpDate = ConvertToDateN(value, true); this.OnPropertyChanged(value);
      }
   }
}
