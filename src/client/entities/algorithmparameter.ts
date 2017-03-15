import * as core from "../../core";
//

export class AlgorithmParameter extends core.ObjectBase {
   private _algorithmParameterID: number;
   private _strategyID: number;
   private _parameterName: string;
   private _parameterValue: string;
   private _parameterType: string;

   get AlgorithmParameterID() {
      return this._algorithmParameterID;
   }
   set AlgorithmParameterID(value) {
      if (this._algorithmParameterID != value) { this._algorithmParameterID = value; this.OnPropertyChanged(value); }
   }

   get StrategyID() {
      return this._strategyID;
   }
   set StrategyID(value) {
      if (this._strategyID != value) { this._strategyID = value; this.OnPropertyChanged(value); }
   }

   get ParameterName() {
      return this._parameterName;
   }
   set ParameterName(value) {
      if (this._parameterName != value) { this._parameterName = value; this.OnPropertyChanged(value); }
   }

   get ParameterValue() {
      return this._parameterValue;
   }
   set ParameterValue(value) {
      if (this._parameterValue != value) { this._parameterValue = value; this.OnPropertyChanged(value); }
   }

   get ParameterType() {
      return this._parameterType;
   }
   set ParameterType(value) {
      if (this._parameterType != value) { this._parameterType = value; this.OnPropertyChanged(value); }
   }
}
