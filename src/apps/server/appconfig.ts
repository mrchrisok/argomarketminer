import { StringDex } from "../../core/index";
import { IConfiguration } from "../../core/common/contracts/iconfiguration";
import "reflect-metadata";
import { injectable } from "inversify/dts/annotation/injectable";

@injectable()
export class AppConfig implements IConfiguration {
   readonly Settings: StringDex<any> = {

   }
}