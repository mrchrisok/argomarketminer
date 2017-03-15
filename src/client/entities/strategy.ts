import * as core from "../../core";
import * as entities from "./index";
//

export class Strategy extends core.ObjectBase {
   private _strategyID: number;
   private _name: string;
   private _shortDesc: string;
   private _longDesc: string;
   private _initialAUM: number;
   private _currentAUM: number;
   private _maximumAUM: number;
   private _algorithmClass: string;
   private _algorithmAssembly: string;
   private _fundID: number;
   private _fund: entities.Fund;
   private _algorithmParameters: entities.AlgorithmParameter[];
   private _transactions: core.ObservableArray<entities.StrategyTransaction>;
   private _messages: core.ObservableArray<entities.AlgorithmMessage>;

   get StrategyID() { return this._strategyID; }
   set StrategyID(value) {
      if (this._strategyID != value) { this._strategyID = value; this.OnPropertyChanged(value); }
   }

   get Name() { return this._name; }
   set Name(value) {
      if (this._name != value) { this._name = value; this.OnPropertyChanged(value); }
   }

   get ShortDesc() { return this._shortDesc; }
   set ShortDesc(value) {
      if (this._shortDesc != value) { this._shortDesc = value; this.OnPropertyChanged(value); }
   }

   get LongDesc() { return this._longDesc; }
   set LongDesc(value) {
      if (this._longDesc != value) { this._longDesc = value; this.OnPropertyChanged(value); }
   }

   get InitialAUM() { return this._initialAUM; }
   set InitialAUM(value) {
      if (this._initialAUM != value) { this._initialAUM = value; this.OnPropertyChanged(value); }
   }

   get CurrentAUM() { return this._currentAUM; }
   set CurrentAUM(value) {
      if (this._currentAUM != value) { this._currentAUM = value; this.OnPropertyChanged(value); }
   }

   get MaximumAUM() { return this._maximumAUM; }
   set MaximumAUM(value) {
      if (this._maximumAUM != value) { this._maximumAUM = value; this.OnPropertyChanged(value); }
   }

   get AlgorithmClass() { return this._algorithmClass; }
   set AlgorithmClass(value) {
      if (this._algorithmClass != value) { this._algorithmClass = value; this.OnPropertyChanged(value); }
   }

   get AlgorithmAssembly() { return this._algorithmAssembly; }
   set AlgorithmAssembly(value) {
      if (this._algorithmAssembly != value) { this._algorithmAssembly = value; this.OnPropertyChanged(value); }
   }

   get FundID() { return this._fundID; }
   set FundID(value) {
      if (this._fundID != value) { this._fundID = value; this.OnPropertyChanged(value); }
   }

   get Fund() { return this._fund; }
   set Fund(value) {
      if (this._fund != value) { this._fund = value; this.OnPropertyChanged(value); }
   }

   get AlgorithmParameters() { return this._algorithmParameters; }
   set AlgorithmParameters(value) {
      if (this._algorithmParameters != value) { this._algorithmParameters = value; this.OnPropertyChanged(value); }
   }

   get Transactions() { return this._transactions; }
   set Transactions(value) {
      if (this._transactions != value) { this._transactions = value; this.OnPropertyChanged(value); }
   }

   get Messages() { return this._messages; }
   set Messages(value) {
      if (this._messages != value) { this._messages = value; this.OnPropertyChanged(value); }
   }
}
