import { ISeatAvailability, ITicket } from '../types';

interface IGetSeatAvailabilitiesParams {
  halfSeatsTotal: number;
  sailedSeats: ITicket[];
  startsAt: number;
  suffix: string;
}

export function getSeatAvailabilities({
  halfSeatsTotal,
  sailedSeats,
  startsAt,
  suffix,
}: IGetSeatAvailabilitiesParams): ISeatAvailability[] {
  return Array.from({ length: halfSeatsTotal }, (_, index) => {
    const seatKey = `${index + 1}${suffix}`;

    return {
      seat: startsAt + index,
      seatKey,
      available: !sailedSeats.some(seat => seat.ds_assento === seatKey),
    };
  });
}
