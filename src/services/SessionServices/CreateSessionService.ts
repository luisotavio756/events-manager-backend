import { parseISO } from 'date-fns';
import Session from 'models/Session';
import knex from '../../database/connection';

interface IRequest {
  dt_sessao: string;
  id_local: number;
  id_evento: number;
  nr_valorInteira: number;
}

export default {
  async run({
    dt_sessao,
    id_evento,
    id_local,
    nr_valorInteira,
  }: IRequest): Promise<Session> {
    const sessionData = {
      dt_sessao: parseISO(dt_sessao),
      id_local,
      id_evento,
      nr_valorInteira,
    };

    const session: Session[] = await knex('tb_sessoes')
      .returning('*')
      .insert(sessionData);

    return session[0];
  },
};
