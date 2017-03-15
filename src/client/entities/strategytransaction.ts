import * as core from "../../core";
import { ITransaction } from "../../common";

export class StrategyTransaction extends core.ObjectBase
   implements ITransaction {

   private _strategyTransactionID: number;
   private _strategyID: number;
   private _brokerID: number;
   private _accountID: string;
   private _brokerTransactionID: string;
   private _brokerOrderID: string;
   private _brokerTradeID: string;
   private _instrument: string;
   private _type: string;
   private _time: core.DateN;
   private _side: string;
   private _price: number;
   private _takeProfit: core.numberN;
   private _stopLoss: core.numberN;

   get StrategyTransactionID() { return this._strategyTransactionID; }
   set StrategyTransactionID(value) {
      if (this._strategyTransactionID != value) { this._strategyTransactionID = value; this.OnPropertyChanged(value); }
   }

   get StrategyID() { return this._strategyID; }
   set StrategyID(value) {
      if (this._strategyID != value) { this._strategyID = value; this.OnPropertyChanged(value); }
   }

   get BrokerID() { return this._brokerID; }
   set BrokerID(value) {
      if (this._brokerID != value) { this._brokerID = value; this.OnPropertyChanged(value); }
   }

   get AccountID() { return this._accountID; }
   set AccountID(value) {
      if (this._accountID != value) { this._accountID = value; this.OnPropertyChanged(value); }
   }

   get BrokerTransactionID() { return this._brokerTransactionID; }
   set BrokerTransactionID(value) {
      if (this._brokerTransactionID != value) { this._brokerTransactionID = value; this.OnPropertyChanged(value); }
   }

   get BrokerOrderID() { return this._brokerOrderID; }
   set BrokerOrderID(value) {
      if (this._brokerOrderID != value) { this._brokerOrderID = value; this.OnPropertyChanged(value); }
   }

   get BrokerTradeID() { return this._brokerTradeID; }
   set BrokerTradeID(value) {
      if (this._brokerTradeID != value) { this._brokerTradeID = value; this.OnPropertyChanged(value); }
   }

   get Instrument() { return this._instrument; }
   set Instrument(value) {
      if (this._instrument != value) { this._instrument = value; this.OnPropertyChanged(value); }
   }

   get Type() { return this._type; }
   set Type(value) {
      if (this._type != value) { this._type = value; this.OnPropertyChanged(value); }
   }

   get Time() { return this._time; }
   set Time(value) {
      if (this._time != value) { this._time = value; this.OnPropertyChanged(value); }
   }

   get Side() { return this._side; }
   set Side(value) {
      if (this._side != value) { this._side = value; this.OnPropertyChanged(value); }
   }

   get Price() { return this._price; }
   set Price(value) {
      if (this._price != value) { this._price = value; this.OnPropertyChanged(value); }
   }

   get TakeProfit() { return this._takeProfit; }
   set TakeProfit(value) {
      if (this._takeProfit != value) { this._takeProfit = value; this.OnPropertyChanged(value); }
   }

   get StopLoss() { return this._stopLoss; }
   set StopLoss(value) {
      if (this._stopLoss != value) { this._stopLoss = value; this.OnPropertyChanged(value); }
   }
}