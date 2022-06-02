import knex from '../../database/connection';

interface IRequest {
  session_id: number;
}

export default {
  async run({ session_id }: IRequest): Promise<void> {
    await knex('tb_sessoes').where('id_sessao', session_id).delete();
  },
};
