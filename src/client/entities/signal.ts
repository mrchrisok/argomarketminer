import { ObjectBase } from "../../core"
import { numberN, DateN } from "../../core/common/core/types"
//

export class Signal extends ObjectBase {
   private _signalID: number;
   private _productID: number;
   private _strategyTransactionID: numberN;
   private _type: string;
   private _instrument: string;
   private _granularity: string;
   private _side: string;
   private _signalPrice: number;
   private _signalTime: string;
   private _sendPostmark: DateN;
   private _active: boolean;

   get SignalID() { return this._signalID; }
   set SignalID(value) {
      if (this._signalID != value) { this._signalID = value; this.OnPropertyChanged(value); }
   }

   get ProductID() { return this._productID; }
   set ProductID(value) {
      if (this._productID != value) { this._productID = value; this.OnPropertyChanged(value); }
   }

   get StrategyTransactionID() { return this._strategyTransactionID; }
   set StrategyTransactionID(value) {
      if (this._strategyTransactionID != value) { this._strategyTransactionID = value; this.OnPropertyChanged(value); }
   }

   get Type() { return this._type; }
   set Type(value) {
      if (this._type != value) { this._type = value; this.OnPropertyChanged(value); }
   }

   get Instrument() { return this._instrument; }
   set Instrument(value) {
      if (this._instrument != value) { this._instrument = value; this.OnPropertyChanged(value); }
   }

   get Granularity() { return this._granularity; }
   set Granularity(value) {
      if (this._granularity != value) { this._granularity = value; this.OnPropertyChanged(value); }
   }

   get Side() { return this._side; }
   set Side(value) {
      if (this._side != value) { this._side = value; this.OnPropertyChanged(value); }
   }

   get SignalPrice() { return this._signalPrice; }
   set SignalPrice(value) {
      if (this._signalPrice != value) { this._signalPrice = value; this.OnPropertyChanged(value); }
   }

   get SignalTime() { return this._signalTime; }
   set SignalTime(value) {
      if (this._signalTime != value) { this._signalTime = value; this.OnPropertyChanged(value); }
   }

   get SendPostmark() { return this._sendPostmark; }
   set SendPostmark(value) {
      if (this._sendPostmark != value) { this._sendPostmark = value; this.OnPropertyChanged(value); }
   }

   get Active() { return this._active; }
   set Active(value) {
      if (this._active != value) { this._active = value; this.OnPropertyChanged(value); }
   }
}