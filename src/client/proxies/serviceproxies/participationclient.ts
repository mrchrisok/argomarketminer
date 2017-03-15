import { ClientBase } from "../../../core/common/servicemodel/index";
import { Reservation, Participation } from "../../index";
import { IConfiguration, ILogger } from "../../../core/index";
import "reflect-metadata";
import { inject, injectable } from "inversify/dts/inversify";

@injectable()
export class ParticipationClient extends ClientBase implements IParticipationService {
   constructor(
      @inject("AppConfig") _config: IConfiguration,
      @inject("") logger: ILogger
   ) {
      super(_config, "IParticipationService");
      this._logger = logger;
   }

   async CreateReservationAsync(reservation: Reservation): Promise<Reservation> {
      let subscriptions;
      const options = { url: "GetSubscriptions" }
      function callback(body: any): void { subscriptions = body.map(x => Object.assign(new e.Subscription(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return subscriptions as e.Subscription[];
   }

   async GetReservationAsync(reservationId: number): Promise<Reservation> {
      return await Channel.GetReservationAsync(reservationId);
   }

   async GetActiveReservationsAsync(): Promise<Reservation[]> {
      return await Channel.GetActiveReservationsAsync();
   }

   async GetReservationsByAccountAsync(loginEmail: string): Promise<Reservation[]> {
      return await Channel.GetReservationsByAccountAsync(loginEmail);
   }

   async GetCancelledReservationsAsync(): Promise<Reservation[]> {
      return await Channel.GetCancelledReservationsAsync();
   }

   async CancelReservationAsync(reservationId: number): Promise<void> {
      await Channel.CancelReservationAsync(reservationId);
   }

   async ExecuteParticipationsFromReservationAsync(reservationId: number): Promise<void> {
      await Channel.ExecuteParticipationsFromReservationAsync(reservationId);
   }

   async RedeemParticipationAsync(loginEmail: string, participationId: number, amount: number): Promise<void> {
      await Channel.RedeemParticipationAsync(loginEmail, participationId, amount);
   }

   async GetParticipationsByAccountAsync(loginEmail: string): Promise<Participation[]> {
      return await Channel.GetParticipationsByAccountAsync(loginEmail);
   }

   async GetParticipationsAsync(): Promise<Participation[]> {
      return await Channel.GetParticipationsAsync();
   }

   async GetParticipationAsync(participationId: number): Promise<Participation> {
      return await Channel.GetParticipationAsync(participationId);
   }

   async IsStrategyAcceptingParticipationsAsync(strategyId: number): Promise<boolean> {
      return await Channel.IsStrategyAcceptingParticipationsAsync(strategyId);
   }
}
