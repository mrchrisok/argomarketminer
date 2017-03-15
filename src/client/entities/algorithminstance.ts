import * as core from "../../core"
import { ConvertToDateN } from "../../core/common/utils/dates";
//

export class AlgorithmInstance extends core.ObjectBase {
  private _algorithmInstanceID: number;
  private _strategyID: number;
  private _status: core.numberN;
  private _firstTradeDateTime: core.DateSN;
  private _lastTradeDateTime: core.DateSN;
  private _runStartDateTime: core.DateSN;
  private _runStopDateTime: core.DateSN;

  public get AlgorithmInstanceID(): number { return this._algorithmInstanceID; }
  public set AlgorithmInstanceID(value: number) {
    if (this._algorithmInstanceID != value) {
      this._algorithmInstanceID = value; this.OnPropertyChanged(value);
    }
  }

  get StrategyID(): number { return this._strategyID; }
  set StrategyID(value: number) {
    if (this._strategyID != value) {
      this._strategyID = value; this.OnPropertyChanged(value);
    }
  }

  get Status(): core.numberN { return this._status; }
  set Status(value: number | null) {
    if (this._status != value) {
      this._status = value; this.OnPropertyChanged(value);
    }
  }

  get FirstTradeDateTime(): core.DateSN { return this._firstTradeDateTime; }
  set FirstTradeDateTime(value: core.DateSN) {
    if (this._firstTradeDateTime != value) {
      this._firstTradeDateTime = ConvertToDateN(value, true); this.OnPropertyChanged(value);
    }
  }

  get LastTradeDateTime(): core.DateSN { return this._lastTradeDateTime; }
  set LastTradeDateTime(value: core.DateSN) {
    if (this._lastTradeDateTime != value) {
      this._lastTradeDateTime = ConvertToDateN(value, true); this.OnPropertyChanged(value);
    }
  }

  get RunStartDateTime(): core.DateSN { return this._runStartDateTime; }
  set RunStartDateTime(value: core.DateSN) {
    if (this._runStartDateTime != value) {
      this._runStartDateTime = ConvertToDateN(value, true); this.OnPropertyChanged(value);
    } 
  }

  get RunStopDateTime(): core.DateSN { return this._runStopDateTime; }
  set RunStopDateTime(value: core.DateSN) {
    if (this._runStopDateTime != value) {
      this._runStopDateTime = ConvertToDateN(value, true); this.OnPropertyChanged(value);
    }
  }
}
