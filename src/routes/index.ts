import { Router } from 'express';
import eventsRoutes from './events.routes';
import placeRoutes from './places.routes';
import usersroutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import salesRoutes from './sales.routes';
import reportsroutes from './reports.routes';

const routes = Router();

routes.use('/users', usersroutes);
routes.use('/events', eventsRoutes);
routes.use('/places', placeRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/sales', salesRoutes);
routes.use('/reports', reportsroutes);

export default routes;
