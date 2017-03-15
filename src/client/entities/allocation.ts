import * as core from "../../core";
//

export class Allocation extends core.ObjectBase {
   private _allocationId: number;
   private _strategyId: number;
   private _amount: number;

   get AccountId() { return this._allocationId; }
   set AccountId(value) {
      if (this._allocationId != value) { this._allocationId = value; this.OnPropertyChanged(value); }
   }

   get StrategyId() { return this._strategyId; }
   set StrategyId(value) {
      if (this._strategyId != value) { this._strategyId = value; this.OnPropertyChanged(value); }
   }

   get Amount() { return this._amount; }
   set Amount(value) {
      if (this._amount != value) { this._amount = value; this.OnPropertyChanged(value); }
   }
}
