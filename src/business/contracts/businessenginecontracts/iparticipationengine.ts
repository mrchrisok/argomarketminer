import { IBusinessEngine } from "../../../core/business/contracts/ibusinessengine";
import { Allocation, Participation, Redemption } from "../../index";

export interface IParticipationEngine extends IBusinessEngine {
   IsAccountParticipatingInFund(accountId: number, strategyId: number): boolean;
   CanFundAcceptNewParticipation(fundId: number, amount: number): boolean;
   CanFundAcceptParticipationAddition(fundId: number, amount: number): boolean;
   CanParticipationBeIncreased(participationId: number, amount: number): boolean;
   PushAllocationIntoParticipation(allocation: Allocation): Participation;
   RedeemFundsFromParticipation(participationId: number, amount: number): Redemption;
}
