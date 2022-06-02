import { Router } from 'express';
import eventsroutes from './events.routes';
import usersroutes from './users.routes';

const routes = Router();

routes.use('/events', eventsroutes);
routes.use('/users', usersroutes);

export default routes;
