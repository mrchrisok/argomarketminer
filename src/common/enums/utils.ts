import { AlgorithmStatus } from "./enums";
import { stringN, numberN } from "../../core/index";

export class Enum {
   static AsAlgorithmStatusString(value: numberN): stringN {
      switch (value) {
         case AlgorithmStatus.NotRunning: return AlgorithmStatus[AlgorithmStatus.NotRunning];
         case AlgorithmStatus.Starting: return AlgorithmStatus[AlgorithmStatus.Starting];
         case AlgorithmStatus.Running: return AlgorithmStatus[AlgorithmStatus.Running];
         case AlgorithmStatus.RunningSuspended: return AlgorithmStatus[AlgorithmStatus.RunningSuspended];
         default: return null;
      }
   }
}