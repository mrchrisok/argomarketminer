import * as core from "../../core";
//

export class Constants {
   static MissedTradeReason: core.StringDex<number> = {
      AccountOpenOrder: -1,
      AccountOpenTrade: -2,
      AccountZeroBalance: -3,
      AccountInsufficientMargin: -4,
      InvalidBuyOrderEntryGreaterThanTakeProfit: -96,
      InvalidBuyOrderEntryLessThanStopLoss: -97,
      InvalidSellOrderEntryLessThanTakeProfit: -98,
      InvalidSellOrderEntryGreaterThanStopLoss: -99
   }
}
