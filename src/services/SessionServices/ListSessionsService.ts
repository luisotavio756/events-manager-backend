import Session from 'models/Session';
import knex from '../../database/connection';

interface IRequest {
  event_id: number;
}

export default {
  async run({ event_id }: IRequest): Promise<Session[]> {
    const sessions = await knex<Session>('tb_sessoes')
      .select('*')
      .where('id_evento', event_id);

    return sessions;
  },
};
