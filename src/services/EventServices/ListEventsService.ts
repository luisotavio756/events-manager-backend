import Event from 'models/Event';
import knex from '../../database/connection';

export default {
  async run(): Promise<Event[]> {
    const events = await knex('tb_eventos').select('*');

    return events;
  },
};
