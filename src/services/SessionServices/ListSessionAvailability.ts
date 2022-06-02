import { ISeatAvailability, ITicket } from 'types';
import { getSeatAvailabilities } from '../../utils/utils';
import knex from '../../database/connection';

interface IRequest {
  session_id: number;
}

export default {
  async run({ session_id }: IRequest): Promise<ISeatAvailability[]> {
    const session = await knex('tb_sessoes')
      .select('tb_local.*', 'tb_sessoes.id_sessao')
      .innerJoin('tb_local', 'tb_sessoes.id_local', 'tb_local.id_local')
      .where('tb_sessoes.id_sessao', session_id);

    const sailedSeats = await knex<ITicket>('tb_ingressos')
      .returning('*')
      .where('id_sessao', session_id);

    const seatsTotal = session[0].nr_assentos;
    const halfSeatsTotal = seatsTotal / 2;

    const firstHalfSeats = getSeatAvailabilities({
      halfSeatsTotal,
      sailedSeats,
      startsAt: 1,
      suffix: 'A',
    });

    const secondHalfSeats = getSeatAvailabilities({
      halfSeatsTotal,
      sailedSeats,
      startsAt: halfSeatsTotal + 1,
      suffix: 'B',
    });

    return [...firstHalfSeats, ...secondHalfSeats];
  },
};
