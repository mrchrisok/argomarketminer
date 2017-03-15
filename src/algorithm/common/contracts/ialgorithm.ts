import * as ce from "../../../client/entities";
import * as core from "../../../core";
//

export interface IAlgorithm {
   readonly Logger: core.ILogger;
   readonly Strategy: ce.Strategy;
   readonly Instance: ce.AlgorithmInstance;
   // ObservableCollection<AlgorithmMessage> Messages { get; }

   Initialize(strategyId: number): Promise<boolean>;
   Start(): Promise<boolean>;
   Stop(): Promise<boolean>;
}
