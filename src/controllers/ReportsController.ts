import { Request, Response } from 'express';

import invoicingService from '../services/ReportsServices/InvoicingService';
import avaliableSessionsService from '../services/ReportsServices/AvailableSessionsService';

export default {
  async invoicings(request: Request, response: Response): Promise<Response> {
    const { filter, value } = request.body;

    const invoicings = await invoicingService.run({
      filter,
      value,
    });

    return response.json(invoicings);
  },

  async avaliableSessions(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { filter, value, finalDate } = request.body;

    const avaliableSessions = await avaliableSessionsService.run({
      filter,
      value,
      finalDate,
    });

    return response.json(avaliableSessions);
  },
};
