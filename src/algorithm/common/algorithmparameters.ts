import { IParameters } from "../../api";
import { AlgorithmParameter } from "../../client";
//

export class AlgorithmParameters implements IParameters {
   constructor(parameters: AlgorithmParameter[]) {
      this._parameters = parameters;
   }

   private _parameters: AlgorithmParameter[]
   private _parameter: AlgorithmParameter;

   public GetString(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "string" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      return this._parameter.ParameterValue;
   }
   public GetBoolean(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "boolean" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      try { return Boolean(this._parameter.ParameterValue); }
      catch (err) { return null; }
   }
   public GetDouble(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "double" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      try { return parseFloat(this._parameter.ParameterValue); }
      catch (err) { return null; }
   }
   public GetDecimal(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "decimal" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      try { return parseFloat(this._parameter.ParameterValue); }
      catch (err) { return null; }
   }
   public GetShort(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "short" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      try { return parseInt(this._parameter.ParameterValue); }
      catch (err) { return null; }
   }
   public GetInteger(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "integer" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      try { return parseInt(this._parameter.ParameterValue); }
      catch (err) { return null; }
   }
   public GetLong(name: string) {
      this._parameter = this._parameters.filter(p => p.ParameterType.toLowerCase() == "long" && p.ParameterName.toLowerCase() == name.toLowerCase())[0];
      try { return parseInt(this._parameter.ParameterValue); }
      catch (err) { return null; }
   }
}
