import { StringDex } from "../index";

export interface IConfiguration {
    readonly Settings: StringDex<any>;
    readonly Services?: StringDex<any>;
}