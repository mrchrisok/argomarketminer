import { Constants } from "./constants";
//

export class Utilities {
   public static GetMissedTradeReason(tradeCapacity: number): string {
      switch (tradeCapacity) {
         case Constants.MissedTradeReason.AccountOpenOrder:
            return "Account has open order.";
         case Constants.MissedTradeReason.AccountOpenTrade:
            return "Account has open trade.";
         case Constants.MissedTradeReason.AccountZeroBalance:
            return "Account has zero balance.";
         case Constants.MissedTradeReason.AccountInsufficientMargin:
            return "Account has insufficient margin.";
         default:
            throw new Error("Unrecognized missed trade reason code.");
      }
   }
}
