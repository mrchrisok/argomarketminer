import { ClientBase } from "../../../core/common/servicemodel/index";
import * as e from "../../entities";
import { IConfiguration, ILogger } from "../../../core/index";
import "reflect-metadata";
import { inject, injectable } from "inversify/dts/inversify";
import { IParticipationService } from "../../index";

@injectable()
export class ParticipationClient extends ClientBase implements IParticipationService {
   constructor(
      @inject("AppConfig") _config: IConfiguration,
      @inject("") logger: ILogger
   ) {
      super(_config, "IParticipationService");
      this._logger = logger;
   }

   async CreateReservationAsync(reservation: e.Reservation): Promise<e.Reservation> {
      const body = { strategy: JSON.stringify(reservation) };
      const options = { url: "CreateReservation", body: body }
      function callback(body: any): void { reservation = Object.assign(reservation, body); }
      await this.Post(options, this.GetResponseHandler(callback));
      return reservation;
   }

   async GetReservationAsync(reservationId: number): Promise<e.Reservation> {
      let reservation;
      const body = { reservationId: reservationId };
      const options = { url: "GetReservation", body: body }
      function callback(body: any): void { reservation = Object.assign(reservation, body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return reservation;
   }

   async GetActiveReservationsAsync(): Promise<e.Reservation[]> {
      let reservations;
      const options = { url: "GetActiveReservations" }
      function callback(body: any): void { reservations = body.map(x => Object.assign(new e.Reservation(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return reservations as e.Reservation[];
   }

   async GetReservationsByAccountAsync(loginEmail: string): Promise<e.Reservation[]> {
      let reservations;
      const body = { loginEmail: loginEmail };
      const options = { url: "GetReservationsByAccount", body: body }
      function callback(body: any): void { reservations = body.map(x => Object.assign(new e.Reservation(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return reservations as e.Reservation[];
   }

   async GetCancelledReservationsAsync(): Promise<e.Reservation[]> {
      let reservations;
      const options = { url: "GetCancelledReservations" }
      function callback(body: any): void { reservations = body.map(x => Object.assign(new e.Reservation(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return reservations as e.Reservation[];
   }

   async CancelReservationAsync(reservationId: number): Promise<void> {
      const body = { reservationId: reservationId };
      const options = { url: "CancelReservation", body: body }
      await this.Patch(options, undefined);
   }

   async ExecuteParticipationsFromReservationAsync(reservationId: number): Promise<void> {
      const body = { reservationId: reservationId };
      const options = { url: "ExecuteParticipationsFromReservation", body: body }
      await this.Post(options, undefined);
   }

   async RedeemParticipationAsync(loginEmail: string, participationId: number, amount: number): Promise<void> {
      const body = { loginEmail: loginEmail, participationId: participationId, amount: amount };
      const options = { url: "RedeemParticipation", body: body }
      await this.Post(options, undefined);
   }

   async GetParticipationsByAccountAsync(loginEmail: string): Promise<e.Participation[]> {
      let participations;
      const body = { loginEmail: loginEmail };
      const options = { url: "GetParticipationsByAccount", body: body }
      function callback(body: any): void { participations = body.map(x => Object.assign(new e.Participation(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return participations as e.Participation[];
   }

   async GetParticipationsAsync(): Promise<e.Participation[]> {
      let participations;
      const options = { url: "GetParticipations" }
      function callback(body: any): void { participations = body.map(x => Object.assign(new e.Participation(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return participations as e.Participation[];
   }

   async GetParticipationAsync(participationId: number): Promise<e.Participation> {
      let participation;
      const body = { participationId: participationId };
      const options = { url: "GetParticipation", body: body }
      function callback(body: any): void { participation = Object.assign(new e.Participation(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return participation as e.Participation;
   }

   async IsStrategyAcceptingParticipationsAsync(strategyId: number): Promise<boolean> {
      let result;
      const body = { strategyId: strategyId };
      const options = { url: "IsStrategyAcceptingParticipations", body: body }
      function callback(body: any): void { result = body.result; }
      await this.Get(options, this.GetResponseHandler(callback));
      return result as boolean;
   }
}
