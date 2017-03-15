import { AlgorithmBase } from "./algorithmbase";

export abstract class TradingAlgorithmBase extends AlgorithmBase {
   public name: string;
   public Initialize(): boolean {
      const result = await super.Initialize(strategyId);

      return result;
   }
   public abstract start(): boolean;
   public abstract onbar(data): void;
   public abstract onheartbeat(data): void;
   public abstract onload(data): void;
   public abstract ontick(data): void;
   public abstract ontransaction(data): void;
   public abstract onunload(data): void;
}
