import User from '../../models/User';
import knex from '../../database/connection';

interface ICreateUserRequest {
    ds_nome: string;
    ds_cpf: string;
    ds_sexo: string; // Char
    ds_email: string;
    ds_telefone: string;
    ds_login: string;
    ds_senha: string;
    dt_nascimento: Date;
    id_tipo_usuario: number;
}

export default {
  async run({
    ds_nome,
    ds_cpf,
    ds_sexo, 
    ds_email,
    ds_telefone,
    ds_login,
    ds_senha,
    dt_nascimento,
    id_tipo_usuario
  }: ICreateUserRequest): Promise<User> {
    const trx = await knex.transaction();

    const user = {
        ds_nome,
        ds_cpf,
        ds_sexo, 
        ds_email,
        ds_telefone,
        ds_login,
        ds_senha,
        dt_nascimento,
        id_tipo_usuario
    };

    const insertedIds = await trx('tb_usuario')
      .returning('id_usuario')
      .insert(user);

    const { id_usuario } = insertedIds[0] as any;

    await trx.commit();

    return {
        id_usuario,
        ds_nome,
        ds_cpf,
        ds_sexo, 
        ds_email,
        ds_telefone,
        ds_login,
        ds_senha,
        dt_nascimento,
        id_tipo_usuario
    };
  },
};
