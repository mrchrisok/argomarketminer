import { IBusinessEngine } from "../../../core/business/contracts/ibusinessengine";

export interface IStrategyEngine extends IBusinessEngine {
   PostAlgorithmStatusNotification(message: string): void;
   CanStrategyAcceptFunds(strategyId: number, amount: number): boolean;
   IsStrategyAlgorithmRunning(strategyId: number): boolean;
}
