import * as _path from "path";

// public
export const port: number = process.env.ARGO_PORT || 8000;
export const staticFiles: string = _path.resolve(__dirname, "../../client/");
export const vendorFiles: string = _path.resolve(__dirname, "../../../node_modules/");
export const apiUrl = "/api";
export const streamUrl = "/stream";
export const environment: string = process.env.OANDA_ENVIRONMENT || "practice";
export const accessToken: string = process.env.OANDA_TOKEN || "ACCESS_TOKEN";
export const accountId: string = process.env.OANDA_ACCOUNTID || "1234567890";
export const instruments: string[] = [
   "EUR_USD",
   "USD_JPY",
   "GBP_USD",
   "EUR_GBP",
   "USD_CHF",
   "EUR_JPY",
   "EUR_CHF",
   "USD_CAD",
   "AUD_USD",
   "GBP_JPY"
];

export function getUrl(env: string, type: string): string {
   const endpoints: Object = {
      live: {
         stream: "https://stream-fxtrade.oanda.com",
         api: "https://api-fxtrade.oanda.com"
      },
      practice: {
         stream: "https://stream-fxpractice.oanda.com",
         api: "https://api-fxpractice.oanda.com"
      }
   };

   return endpoints[env][type];
}

