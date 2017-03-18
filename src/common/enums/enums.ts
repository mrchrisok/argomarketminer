import { stringN, numberN } from "../../core/index";

export enum CommunicationTemplate {
   EmailSignalNew,
   EmailSignalUpdate,
   LetterRedemptionApproval,
   LetterWelcomeToFundPackage
}

export enum CommunicationSendType {
   Email,
   LetterNextDay,
   LetterTwoDay,
   LetterThreeDay
}

export enum AlgorithmStatus {
   NotRunning,
   Starting,
   Running,
   RunningSuspended
}
