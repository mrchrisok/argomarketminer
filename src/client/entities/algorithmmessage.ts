import * as core from "../../core"
//

export class AlgorithmMessage extends core.ObjectBase {
   private _algorithmMessageID: number;
   private _algorithmInstanceID: number;
   private _message: string;
   _severity: core.TraceEventType;
   private _exception: Error;

   // public
   public get AlgorithmMessageID() { return this._algorithmMessageID; }
   public set AlgorithmMessageID(value) {
      if (this._algorithmMessageID != value) { this._algorithmMessageID = value; this.OnPropertyChanged(value); }
   }

   public get AlgorithmInstanceID() { return this._algorithmInstanceID; }
   public set AlgorithmInstanceID(value) {
      if (this._algorithmInstanceID != value) { this._algorithmInstanceID = value; this.OnPropertyChanged(value); }
   }

   public get Message() { return this._message; }
   public set Message(value) {
      if (this._message != value) { this._message = value; this.OnPropertyChanged(value); }
   }

   public get Severity() { return this._severity; }
   public set Severity(value) {
      if (this._severity != value) { this._severity = value; this.OnPropertyChanged(value); }
   }

   public get Error() { return this._exception; }
   public set Error(value) {
      if (this._exception != value) { this._exception = value; this.OnPropertyChanged(value); }
   }
}

