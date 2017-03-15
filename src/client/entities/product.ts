import { ObjectBase } from "../../core";
//

export class Product extends ObjectBase {
   private _productID: number;
   private _name: string;
   private _code: string;
   private _shortDesc: string;
   private _longDesc: string;
   private _active: boolean;

   get ProductID() { return this._productID; }
   set ProductID(value) {
      if (this._productID != value) { this._productID = value; this.OnPropertyChanged(value); }
   }

   get Name() { return this._name; }
   set Name(value) {
      if (this._name != value) { this._name = value; this.OnPropertyChanged(value); }
   }

   get Code() { return this._code; }
   set Code(value) {
      if (this._code != value) { this._code = value; this.OnPropertyChanged(value); }
   }

   get ShortDesc() { return this._shortDesc; }
   set ShortDesc(value) {
      if (this._shortDesc != value) { this._shortDesc = value; this.OnPropertyChanged(value); }
   }

   get LongDesc() { return this._longDesc; }
   set LongDesc(value) {
      if (this._longDesc != value) { this._longDesc = value; this.OnPropertyChanged(value); }
   }

   get Active() { return this._active; }
   set Active(value) {
      if (this._active != value) { this._active = value; this.OnPropertyChanged(value); }
   }
}

