import knex from '../../database/connection';

interface IReportsRequest {
  filter: string;
  value: string;
  finalDate: string;
}

export default {
  async run({
    filter,
    value,
    finalDate,
  }: IReportsRequest): Promise<Response[]> {
    switch (filter) {
      case 'date':
        return knex('RF_FS02')
          .select()
          .whereBetween('ds_data', [value, finalDate]);
      case 'event':
        return knex('RF_FS02').select().where('id_evento', value);
      case 'session':
        return knex('RF_FS02').select().where('id_sessao', value);
      default:
        return knex('RF_FS02').select();
    }
  },
};
