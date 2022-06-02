import { Router } from 'express';

import PlacesController from '../controllers/PlacesController';

const placesRoutes = Router();

placesRoutes.get('/', PlacesController.index);
placesRoutes.post('/', PlacesController.create);

export default placesRoutes;
