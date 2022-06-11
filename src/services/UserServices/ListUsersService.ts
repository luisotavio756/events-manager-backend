import User from 'models/User';
import knex from '../../database/connection';

export default {
  async run(): Promise<User[]> {
    // const users = await knex('tb_usuario').select('*');
    const users = await knex('tb_usuario').select('id_usuario', 'ds_nome', 'ds_cpf', 'ds_sexo', 'ds_email', 'ds_telefone', 'ds_login', 'dt_nascimento', 'id_tipo_usuario');

    return users;
  },
};
