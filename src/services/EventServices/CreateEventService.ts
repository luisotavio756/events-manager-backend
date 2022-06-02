import { isBefore, parseISO } from 'date-fns';

import SessionDTO from '../../dtos/SessionDTO';
import AppError from '../../errors/AppError';
import Event from '../../models/Event';
import knex from '../../database/connection';

interface ICreateEventRequest {
  ds_evento: string;
  ds_tipoevento: string;
  sessoes: SessionDTO[];
}

export default {
  async run({
    ds_evento,
    ds_tipoevento,
    sessoes,
  }: ICreateEventRequest): Promise<Event> {
    const createdDate = new Date();
    const trx = await knex.transaction();

    const event = {
      ds_evento,
      dt_cadastro: createdDate,
      ds_tipoevento,
    };

    const insertedIds = await trx('tb_eventos')
      .returning('id_evento')
      .insert(event);

    const { id_evento } = insertedIds[0] as any;

    sessoes.forEach(session => {
      const parsedDate = parseISO(session.date);

      if (isBefore(parsedDate, Date.now())) {
        throw new AppError(
          'Não é possível cadastrar uma sessão em uma data passada.',
        );
      }

      if (sessoes.find(s => s.date === session.date)) {
        throw new AppError(
          'Não é possível cadastrar duas sessões com a mesma data',
        );
      }
    });

    const sessionsToCreate = sessoes.map(session => ({
      dt_sessao: session.date,
      id_local: session.placeId,
      id_evento,
      nr_valorInteira: session.fullTicketValue,
    }));

    await trx('tb_sessoes').insert(sessionsToCreate);

    await trx.commit();

    return {
      id_evento,
      ds_evento,
      ds_tipoevento,
      dt_cadastro: createdDate,
      sessoes: sessionsToCreate,
    };
  },
};
