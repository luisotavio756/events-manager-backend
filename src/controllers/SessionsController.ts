import { Request, Response } from 'express';

import listSessionsService from '../services/SessionServices/ListSessionsService';
import destroySessionService from '../services/SessionServices/DestroySessionService';
import createSessionService from '../services/SessionServices/CreateSessionService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const { event_id } = request.params;

    const sessionsAvailability = await listSessionsService.run({
      event_id: Number(event_id),
    });

    return response.json(sessionsAvailability);
  },

  async store(request: Request, response: Response): Promise<Response> {
    const { event_id } = request.params;
    const { dt_sessao, id_local, nr_valorInteira } = request.body;

    const createdSession = await createSessionService.run({
      id_evento: Number(event_id),
      dt_sessao,
      id_local,
      nr_valorInteira,
    });

    return response.json(createdSession);
  },

  async destroy(request: Request, response: Response): Promise<Response> {
    const { session_id } = request.params;

    await destroySessionService.run({
      session_id: Number(session_id),
    });

    return response.status(204).send();
  },
};
