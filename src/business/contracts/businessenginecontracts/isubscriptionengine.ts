import { IBusinessEngine } from "../../../core/business/contracts/ibusinessengine";
import { Signal } from "../../index";

export interface ISubscriptionEngine extends IBusinessEngine {
   PushSignalToSubscribers(signalId: number): Signal;
}

