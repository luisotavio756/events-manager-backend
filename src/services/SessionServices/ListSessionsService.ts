import Session from 'models/Session';
import { isSessionActive } from '../../utils/utils';
import knex from '../../database/connection';

interface IRequest {
  event_id: number;
}

interface IQueryResult extends Session {
  sailedTickets: string;
  availableTickets: number;
  nr_assentos: number;
}

interface IResponse extends Omit<IQueryResult, 'sailedTickets'> {
  sailedTickets: number;
  availableTickets: number;
}

export default {
  async run({ event_id }: IRequest): Promise<IResponse[]> {
    const queryResult = await knex('tb_sessoes')
      .select<IQueryResult[]>('tb_sessoes.*', 'tb_local.nr_assentos')
      .count<IQueryResult[]>('tb_sessoes.id_sessao AS sailedTickets')
      .leftJoin(
        'tb_ingressos',
        'tb_ingressos.id_sessao',
        '=',
        'tb_sessoes.id_sessao',
      )
      .leftJoin('tb_local', 'tb_local.id_local', '=', 'tb_sessoes.id_local')
      .groupBy('tb_sessoes.id_sessao')
      .groupBy('tb_local.nr_assentos')
      .where('id_evento', event_id);

    const sessions = queryResult.map((session: IQueryResult) => ({
      ...session,
      availableTickets:
        Number(session.nr_assentos) - Number(session.sailedTickets),
      sailedTickets: Number(session.sailedTickets),
      is_active: isSessionActive(session.dt_sessao),
    }));

    return sessions;
  },
};
