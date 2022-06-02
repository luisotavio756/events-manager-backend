import { Request, Response } from 'express';

import listSessionAvailabilityService from '../services/SessionServices/ListSessionAvailability';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const { session_id } = request.params;

    const sessionsAvailability = await listSessionAvailabilityService.run({
      session_id: Number(session_id),
    });

    return response.json(sessionsAvailability);
  },
};
