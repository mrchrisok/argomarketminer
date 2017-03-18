import { Container } from "inversify";
import { IConfiguration } from "../../core/common/contracts/iconfiguration";
import { EntityBase } from "../../core/common/index";
import { AppConfig } from "./appconfig";

const container = new Container();

container.bind<IConfiguration>("AppConfig").to(AppConfig);


EntityBase.Container = container;

export { container };