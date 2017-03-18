import { Container } from "inversify";
import { ObjectBase } from "../../core/common/core";
import { IConfiguration } from "../../core/common/contracts/iconfiguration";
import { AppConfig } from "./appconfig";
import { IStrategyService, ServiceFactory } from "../../client/index";
import { StrategyClient } from "../../client/proxies/serviceproxies/index";
import { IServiceFactory } from "../../core/index";

const container = new Container();

container.bind<IConfiguration>("AppConfig").to(AppConfig);
container.bind<IServiceFactory>("").to(ServiceFactory);
container.bind<IStrategyService>("").to(StrategyClient);
// iocContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
// iocContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

ObjectBase.Container = container;

export { container };