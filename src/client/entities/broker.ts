import { ObjectBase } from "../../core";
//

export class Broker extends ObjectBase {
   private _brokerID: number;
   private _name: string;

   get BrokerID() { return this._brokerID; }
   set BrokerID(value) {
      if (this._brokerID != value) this._brokerID = value; this.OnPropertyChanged(value);
   }

   get Name() { return this._name; }
   set Name(value) {
      if (this._name != value) this._name = value; this.OnPropertyChanged(value);
   }
}

