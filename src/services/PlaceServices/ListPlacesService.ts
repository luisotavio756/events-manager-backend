import Place from 'models/Place';
import knex from '../../database/connection';

export default {
  async run(): Promise<Place[]> {
    const places = await knex('tb_local').select('*');

    return places;
  },
};
