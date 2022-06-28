import { Request, Response } from 'express';

import finishSaleService from '../services/SaleServices/FinishSaleService';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      id_usuario,
      id_sessao,
      ds_formapagamento,
      ds_tipovenda,
      ds_nomecliente,
      ds_tipodocumento,
      nr_documento,
      tickets,
    } = request.body;

    const finishedSale = await finishSaleService.run({
      id_usuario,
      id_sessao,
      ds_formapagamento,
      ds_tipovenda,
      ds_nomecliente,
      ds_tipodocumento,
      nr_documento,
      tickets,
    });

    return response.json(finishedSale);
  },
};
