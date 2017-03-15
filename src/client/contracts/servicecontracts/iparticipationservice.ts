import { Participation, Reservation } from "../../index";
import { IServiceContract } from "../../../core/index";

export interface IParticipationService extends IServiceContract {
   CreateReservationAsync(reservation: Reservation): Promise<Reservation>;
   GetReservationAsync(reservationId: number): Promise<Reservation>;
   GetActiveReservationsAsync(): Promise<Reservation[]>;
   GetReservationsByAccountAsync(loginEmail: string): Promise<Reservation[]>;
   GetCancelledReservationsAsync(): Promise<Reservation[]>;
   CancelReservationAsync(reservationId: number): Promise<void>;
   ExecuteParticipationsFromReservationAsync(reservationId: number): Promise<void>;
   RedeemParticipationAsync(loginEmail: string, participationId: number, amount: number): Promise<void>;
   GetParticipationsByAccountAsync(loginEmail: string): Promise<Participation[]>;
   GetParticipationsAsync(): Promise<Participation[]>;
   GetParticipationAsync(participationId: number): Promise<Participation>;
   IsStrategyAcceptingParticipationsAsync(strategyId: number): Promise<boolean>;
}