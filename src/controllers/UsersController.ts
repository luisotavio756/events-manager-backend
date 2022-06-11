import { Request, Response } from 'express';

import createUsersService from '../services/UserServices/CreateUserService';
import listUsersService from '../services/UserServices/ListUsersService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const users = await listUsersService.run();

    return response.json(users);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, sexo, email, telephone, password, birthDate } = request.body;

    const createUser = await createUsersService.run({
        ds_nome: name,
        ds_cpf: cpf,
        ds_sexo: sexo,
        ds_email: email,
        ds_telefone: telephone,
        ds_login: email,
        ds_senha: password,
        dt_nascimento: birthDate,
        id_tipo_usuario: 3,
    });

    return response.json(createUser);
  },
};
