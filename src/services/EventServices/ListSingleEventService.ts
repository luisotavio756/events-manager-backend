import Event from 'models/Event';
import knex from '../../database/connection';

interface IRequest {
    id: number;
}

export default {
  async run({ id }: IRequest): Promise<Event[]> {
    const events = await knex('tb_eventos').select('*').where('id_evento', id)

    return events;
  },
};

