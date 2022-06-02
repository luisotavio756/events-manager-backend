import { isBefore, parseISO } from 'date-fns';
import Session from 'models/Session';
import AppError from '../../errors/AppError';
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
    const parsedDate = parseISO(dt_sessao);

    if (isBefore(parsedDate, Date.now())) {
      throw new AppError(
        'Não é possível cadastrar uma sessão em uma data passada.',
      );
    }

    const findSessionInTheSameDate = await knex<Session>('tb_sessoes').where(
      'dt_sessao',
      parsedDate,
    );

    if (findSessionInTheSameDate.length > 0) {
      throw new AppError(
        'Não é possível cadastrar duas sessões com a mesma data',
      );
    }

    const findEvent = await knex('tb_eventos').where('id_evento', id_evento);

    if (!findEvent.length) {
      throw new AppError('Evento não encontrado.');
    }

    const findPlace = await knex('tb_local').where('id_local', id_local);

    if (!findPlace.length) {
      throw new AppError('Local não encontrado.');
    }

    const sessionData = {
      dt_sessao: parsedDate,
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
