import { Router } from 'express';
import eventsRoutes from './events.routes';
import placeRoutes from './places.routes';
import usersroutes from './users.routes';

const routes = Router();

routes.use('/events', eventsRoutes);
routes.use('/places', placeRoutes);
routes.use('/users', usersroutes);

export default routes;
