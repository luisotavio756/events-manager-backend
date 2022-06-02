import { Request, Response } from 'express';

import createPlaceService from '../services/PlaceServices/CreatePlaceService';
import listPlacesService from '../services/PlaceServices/ListPlacesService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const places = await listPlacesService.run();

    return response.json(places);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { ds_local, nr_assentos } = request.body;

    const place = await createPlaceService.run({
      ds_local,
      nr_assentos,
    });

    return response.json(place);
  },

  async destroy(request: Request, response: Response): Promise<Response> {
    return response.json({
      message: 'Deletado com sucesso.',
    });
  },
};
