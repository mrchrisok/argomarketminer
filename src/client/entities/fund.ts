import { ObjectBase, ObservableArray } from "../../core/common/core";
import { Participation, Strategy } from "./index";
//

export class Fund extends ObjectBase {
   private _fundID: number;
   private _openDate: Date;
   private _closeDate: Date;
   private _openToNew: boolean;
   private _openToAdd: boolean;
   private _openToRedeem: boolean;
   private _strategies: ObservableArray<Strategy>
   private _participations: ObservableArray<Participation>;

   get FundID() { return this._fundID; }
   set FundID(value) {
      if (this._fundID != value) { this._fundID = value; this.OnPropertyChanged(value); }
   }

   get OpenDate() { return this._openDate; }
   set OpenDate(value) {
      if (this._openDate != value) { this._openDate = value; this.OnPropertyChanged(value); }
   }

   get CloseDate() { return this._closeDate; }
   set CloseDate(value) {
      if (this._closeDate != value) { this._closeDate = value; this.OnPropertyChanged(value); }
   }

   get OpenToNew() { return this._openToNew; }
   set OpenToNew(value) {
      if (this._openToNew != value) { this._openToNew = value; this.OnPropertyChanged(value); }
   }

   get OpenToAdd() { return this._openToAdd; }
   set OpenToAdd(value) {
      if (this._openToAdd != value) { this._openToAdd = value; this.OnPropertyChanged(value); }
   }

   get OpenToRedeem() { return this._openToRedeem; }
   set OpenToRedeem(value) {
      if (this._openToRedeem != value) { this._openToRedeem = value; this.OnPropertyChanged(value); }
   }

   get Strategies() { return this._strategies; }
   set Strategies(value) {
      if (this._strategies != value) { this._strategies = value; this.OnPropertyChanged(value); }
   }

   get Participations() { return this._participations; }
   set Participations(value) {
      if (this._participations != value) { this._participations = value; this.OnPropertyChanged(value); }
   }
}
