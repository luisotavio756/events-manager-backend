import Event from 'models/User';
import knex from '../database/connection';

export default {
  async run(): Promise<Event[]> {
    const users = await knex('tb_usuario').select('*');

    return users;
  },
};
