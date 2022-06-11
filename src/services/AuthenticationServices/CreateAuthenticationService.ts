import User from 'models/User';
import AppError from '../../errors/AppError';
import knex from '../../database/connection';
import bcrypt from 'bcrypt';

interface ICreateAuthenticationRequest {
  email: string;
  password: string;
}

export default {
  async run({
    email,
    password,
  }: ICreateAuthenticationRequest): Promise<User> {

    const findUser = await knex('tb_usuario').select('*').where('ds_email', email);

    if (findUser.length != 0 && await bcrypt.compare(password, findUser[0].ds_senha)) {

        const user = {
            id_usuario: findUser[0].id_usuario,
            ds_nome: findUser[0].ds_nome,
            ds_cpf: findUser[0].ds_cpf,
            ds_sexo: findUser[0].ds_sexo,
            ds_email: findUser[0].ds_email,
            ds_telefone: findUser[0].ds_telefone,
            ds_login: findUser[0].ds_login,
            // ds_senha: findUser[0].ds_senha,
            // ds_senha: "",
            dt_nascimento: findUser[0].dt_nascimento,
            id_tipo_usuario: findUser[0].id_tipo_usuario,
            token: "Token",
        };
    
        return user;

    } else {
        throw new AppError(
            'Email ou senha incorretos.', 404
        );
    }
  },
};
