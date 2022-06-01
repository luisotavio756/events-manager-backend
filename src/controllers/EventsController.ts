import { Request, Response } from 'express';

import createEventService from '../services/CreateEventService';
import listEventsService from '../services/ListEventsService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const events = await listEventsService.run();

    return response.json(events);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { description, eventType, sessions } = request.body;

    const createEvent = await createEventService.run({
      ds_evento: description,
      ds_tipoevento: eventType,
      sessoes: sessions,
    });

    return response.json(createEvent);
  },
};
