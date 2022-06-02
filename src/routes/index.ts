import { Router } from 'express';
import eventsRoutes from './events.routes';
import placeRoutes from './places.routes';
import usersroutes from './users.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router();

routes.use('/events', eventsRoutes);
routes.use('/places', placeRoutes);
routes.use('/users', usersroutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
