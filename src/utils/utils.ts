import { ISeatAvailability, ITicket } from '../types';

interface IGetSeatsAvailabily {
  halfSeatsTotal: number;
  sailedSeats: ITicket[];
  startsAt: number;
  suffix: string;
}

interface IGetSessionAvailability {
  seatsTotal: number;
  sailedSeats: ITicket[];
}

export function getSeatsAvailability({
  halfSeatsTotal,
  sailedSeats,
  startsAt,
  suffix,
}: IGetSeatsAvailabily): ISeatAvailability[] {
  return Array.from({ length: halfSeatsTotal }, (_, index) => {
    const seatKey = `${index + 1}${suffix}`;

    return {
      seat: startsAt + index,
      seatKey,
      available: !sailedSeats.some(seat => seat.ds_assento === seatKey),
    };
  });
}

export function getSessionAvailability({
  seatsTotal,
  sailedSeats,
}: IGetSessionAvailability) {
  const halfSeatsTotal = seatsTotal / 2;

  const firstHalfSeats = getSeatsAvailability({
    halfSeatsTotal,
    sailedSeats,
    startsAt: 1,
    suffix: 'A',
  });

  const secondHalfSeats = getSeatsAvailability({
    halfSeatsTotal,
    sailedSeats,
    startsAt: halfSeatsTotal + 1,
    suffix: 'B',
  });

  return [...firstHalfSeats, ...secondHalfSeats];
}
