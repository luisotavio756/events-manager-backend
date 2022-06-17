import { Request, Response } from 'express';

import createEventService from '../services/EventServices/CreateEventService';
import listEventsService from '../services/EventServices/ListEventsService';
import listSingleEventsService from '../services/EventServices/ListSingleEventService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const events = await listEventsService.run();

    return response.json(events);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, eventType, sessions } = request.body;

    const createEvent = await createEventService.run({
      nm_evento: name,
      ds_evento: description,
      ds_tipoevento: eventType,
      sessoes: sessions,
    });

    return response.json(createEvent);
  },

  async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const event = await listSingleEventsService.run({
      id: Number(id),
    });

    return response.json(event);
  },
};
