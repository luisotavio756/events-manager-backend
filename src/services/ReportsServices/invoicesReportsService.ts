import knex from '../../database/connection';

interface IReportsRequest {
  filter: string;
  value: string;
}

export default {
  async run({ filter, value }: IReportsRequest): Promise<Response[]> {
    switch (filter) {
      case 'date':
        return knex('RF_FS01').select().where('ds_data', value);
      case 'id_event':
        return knex('RF_FS01').select().where('id_evento', value);
      case 'session':
        return knex('RF_FS01').select().where('id_sessao', value);
      default:
        return knex('RF_FS01').select();
    }
  },
};
