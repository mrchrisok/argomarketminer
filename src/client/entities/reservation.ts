import { ObjectBase } from "../../core";
//

export class Reservation extends ObjectBase {
   private _reservationID: number;
   private _accountID: number;
   private _amount: number;
   private _open: boolean;
   private _cancelled: boolean;

   get ReservationID() { return this._reservationID; }
   set ReservationID(value) {
      if (this._reservationID != value) { this._reservationID = value; this.OnPropertyChanged(value); }
   }

   get AccountID() { return this._accountID; }
   set AccountID(value) {
      if (this._accountID != value) { this._accountID = value; this.OnPropertyChanged(value); }
   }

   get Amount() { return this._amount; }
   set Amount(value) {
      if (this._amount != value) { this._amount = value; this.OnPropertyChanged(value); }
   }

   get Open() { return this._open; }
   set Open(value) {
      if (this._open != value) { this._open = value; this.OnPropertyChanged(value); }
   }

   get Cancelled() { return this._cancelled; }
   set Cancelled(value) {
      if (this._cancelled != value) { this._cancelled = value; this.OnPropertyChanged(value); }
   }
}  
