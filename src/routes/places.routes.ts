import { Router } from 'express';
import routes from 'routes';
import PlacesController from '../controllers/PlacesController';
import authMiddleware from '../middlewares/auth'

const placesRoutes = Router();

placesRoutes.use(authMiddleware);
placesRoutes.get('/', PlacesController.index);
placesRoutes.post('/', PlacesController.create);

export default placesRoutes;
