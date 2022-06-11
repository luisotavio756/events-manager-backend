import { ISeatAvailability, ITicket } from 'types';
import Session from 'models/Session';
import Place from 'models/Place';
import { getSessionAvailability } from '../../utils/utils';
import knex from '../../database/connection';

interface IRequest {
  session_id: number;
}

interface IQueryResult
  extends Omit<Session, 'id_sessao'>,
    Omit<Place, 'id_local'> {
  id_sessao: number;
}

interface IResponse {
  id_sessao: number;
  seats: number;
  availableSeats: number;
  sailedSeats: number;
  seatsAvailability: ISeatAvailability[];
}

export default {
  async run({ session_id }: IRequest): Promise<IResponse> {
    const session = await knex('tb_sessoes')
      .select<IQueryResult[]>('tb_local.*', 'tb_sessoes.id_sessao')
      .innerJoin('tb_local', 'tb_sessoes.id_local', 'tb_local.id_local')
      .where('tb_sessoes.id_sessao', session_id);

    const sailedSeats = await knex<ITicket>('tb_ingressos')
      .returning('*')
      .where('id_sessao', session_id);

    const { id_sessao, nr_assentos } = session[0];
    const seatsAvailability = getSessionAvailability({
      sailedSeats,
      seatsTotal: nr_assentos,
    });

    return {
      id_sessao,
      seats: nr_assentos,
      availableSeats: nr_assentos - sailedSeats.length,
      sailedSeats: sailedSeats.length,
      seatsAvailability,
    };
  },
};
