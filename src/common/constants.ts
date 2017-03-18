import { StringDex } from "../core/index";

export const Constants: StringDex<any> = {
   MetaSettings: {
      Environments: {
         Default: "DEFAULT",
         Development: "DEVELOPMENT",
         Production: "PRODUCTION"
      },
      Types: {
         Api: "API",
         Authentication: "AUTHENTICATION",
         Communication: "COMMUNICATION",
         Risk: "RISK"
      },
      Codes: {
         // communication
         EmailSender: "EmailSender",
         // api
         OANDAEnvironment: "OANDA_Environment",
         OANDAPracticeToken: "OANDA_Practice_Token",
         OANDAPracticeAccount: "OANDA_Practice_Account",
         OANDATradeToken: "OANDA_Trade_Token",
         OANDATradeAccount: "OANDA_Trade_Account",
         SendGridApiKey: "SENDGRID_ApiKey"
      }
   },
   Brokers: {
      ETrade: "ETrade",
      InteractiveBrokers: "InteractiveBrokers",
      OANDA: "OANDA",
      TradeStation: "TradeStation"
   }
}