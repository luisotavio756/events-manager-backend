import { Router } from 'express';
import eventsroutes from './events.routes';

const routes = Router();

routes.use('/events', eventsroutes);

export default routes;
