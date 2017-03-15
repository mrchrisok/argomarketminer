import * as core from "../../core";
import { Account, Participation } from "./index";
//

export class Redemption extends core.ObjectBase {
   private _redemptionID: number;
   private _amount: number;
   private _datePaid: Date;
   private _accountID: core.numberN;
   private _participationID: number;
   private _account: Account;
   private _participation: Participation;

   get RedemptionID() { return this._redemptionID; }
   set RedemptionID(value) {
      if (this._redemptionID != value) { this._redemptionID = value; this.OnPropertyChanged(value); }
   }

   get Amount() { return this._amount; }
   set Amount(value) {
      if (this._amount != value) { this._amount = value; this.OnPropertyChanged(value); }
   }

   get DatePaid() { return this._datePaid; }
   set DatePaid(value) {
      if (this._datePaid != value) { this._datePaid = value; this.OnPropertyChanged(value); }
   }

   get AccountID() { return this._accountID; }
   set AccountID(value) {
      if (this._accountID != value) { this._accountID = value; this.OnPropertyChanged(value); }
   }

   get ParticipationID() { return this._participationID; }
   set ParticipationID(value) {
      if (this._participationID != value) { this._participationID = value; this.OnPropertyChanged(value); }
   }

   get Account() { return this._account; }
   set Account(value) {
      if (this._account != value) { this._account = value; this.OnPropertyChanged(value); }
   }

   get Participation() { return this._participation; }
   set Participation(value) {
      if (this._participation != value) { this._participation = value; this.OnPropertyChanged(value); }
   }
}
