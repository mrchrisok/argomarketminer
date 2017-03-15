import { ObjectBase } from "../../core/common/core"
//

export class Participation extends ObjectBase {

   private _participationID: number;
   private _accountID: number;
   private _initialBalance: number;
   private _currentBalance: number;
   private _fundID: number;

   get ParticipationId() { return this._participationID; }
   set ParticipationId(value) {
      if (this._participationID != value) { this._participationID = value; this.OnPropertyChanged(value); }
   }

   get AccountId() { return this._accountID; }
   set AccountId(value) {
      if (this._accountID != value) { this._accountID = value; this.OnPropertyChanged(value); }
   }

   get InitialBalance() { return this._initialBalance; }
   set InitialBalance(value) {
      if (this._initialBalance != value) { this._initialBalance = value; this.OnPropertyChanged(value); }
   }

   get CurrentBalance() { return this._currentBalance; }
   set CurrentBalance(value) {
      if (this._currentBalance != value) { this._currentBalance = value; this.OnPropertyChanged(value); }
   }

   get FundID() { return this._fundID; }
   set FundID(value) {
      if (this._fundID != value) { this._fundID = value; this.OnPropertyChanged(value); }
   }
}

