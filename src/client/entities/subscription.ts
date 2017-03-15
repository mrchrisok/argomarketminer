import { ObjectBase } from "../../core";
//

export class Subscription extends ObjectBase {
   private _subscriptionID: number;
   private _productID: number;
   private _accountID: number;
   private _active: boolean;
   private _account: Account;

   get SubscriptionID() { return this._subscriptionID; }
   set SubscriptionID(value) {
      if (this._subscriptionID != value) { this._subscriptionID = value; this.OnPropertyChanged(value); }
   }

   get ProductID() { return this._productID; }
   set ProductID(value) {
      if (this._productID != value) { this._productID = value; this.OnPropertyChanged(value); }
   }

   get AccountID() { return this._accountID; }
   set AccountID(value) {
      if (this._accountID != value) { this._accountID = value; this.OnPropertyChanged(value); }
   }

   get Active() { return this._active; }
   set Active(value) {
      if (this._active != value) { this._active = value; this.OnPropertyChanged(value); }
   }

   get Account() { return this._account; }
   set Account(value) {
      if (this._account != value) { this._account = value; this.OnPropertyChanged(value); }
   }
}

