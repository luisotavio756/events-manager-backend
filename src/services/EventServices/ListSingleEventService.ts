import Event from 'models/Event';
import Session from 'models/Session';
import AppError from '../../errors/AppError';
import knex from '../../database/connection';

interface IRequest {
  id: number;
}

export default {
  async run({ id }: IRequest): Promise<Event[]> {
    const [event] = await knex('tb_eventos').select('*').where('id_evento', id);

    if (!event) {
      throw new AppError('Evento não encontrado.', 404);
    }

    const sessions = await knex<Session>('tb_sessoes')
      .select('*')
      .where('id_evento', id);

    return {
      ...event,
      sessoes: sessions,
    };
  },
};
