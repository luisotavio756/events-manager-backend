import { Router } from 'express';
import eventsRoutes from './events.routes';
import placeRoutes from './places.routes';

const routes = Router();

routes.use('/events', eventsRoutes);
routes.use('/places', placeRoutes);

export default routes;
