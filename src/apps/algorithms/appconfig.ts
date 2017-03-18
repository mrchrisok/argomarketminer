import { StringDex } from "../../core/index";
import { IConfiguration } from "../../core/common/contracts/iconfiguration";
import "reflect-metadata";
import { injectable } from "inversify/dts/annotation/injectable";

@injectable()
export class AppConfig implements IConfiguration {
   readonly Settings: StringDex<any> = {
      pips: {
         "EUR_USD": 0.0001,
         "USD_JPY": 0.01,
         "GBP_USD": 0.0001,
         "EUR_GBP": 0.0001,
         "USD_CHF": 0.0001,
         "EUR_JPY": 0.01,
         "EUR_CHF": 0.0001,
         "USD_CAD": 0.0001,
         "AUD_USD": 0.0001,
         "GBP_JPY": 0.01
      }
   }

   readonly Services: StringDex<any> = {
      IAccountService: {
         url: "http://localhost:8000/mms/AccountService"
      },
      IMetadataService: {
         url: "http://localhost:8000/mms/MetadataService"
      },
      IParticipationService: {
         url: "http://localhost:8000/mms/ParticipationService"
      },
      IStrategyService: {
         url: "http://localhost:8000/mms/StrategyService"
      }
   }
}