import { Request, Response } from 'express';

import invoicesReportsService from '../services/ReportsServices/invoicesReportsService';
import availableSessionsReportsService from '../services/ReportsServices/availableSessionsReportsService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const { filter, value, finalDate, type } = request.body;

    let reports;

    if (type === 'invoices') {
      reports = await invoicesReportsService.run({
        filter,
        value,
      });
    }
    if (type === 'availableSessions') {
      reports = await availableSessionsReportsService.run({
        filter,
        value,
        finalDate,
      });
    }

    return response.json(reports);
  },
};
