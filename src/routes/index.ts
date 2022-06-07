import { Router } from 'express';
import eventsRoutes from './events.routes';
import placeRoutes from './places.routes';
import usersroutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import salesRoutes from './sales.routes';

const routes = Router();

routes.use('/events', eventsRoutes);
routes.use('/places', placeRoutes);
routes.use('/users', usersroutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/sales', salesRoutes);

export default routes;
