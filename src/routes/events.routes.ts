import { Router } from 'express';
import EventsController from '../controllers/EventsController';
import sessionsRoutes from './sessions.routes';
import authMiddleware from '../middlewares/auth'

const eventsroutes = Router();

eventsroutes.get('/', EventsController.index);
eventsroutes.post('/', authMiddleware, EventsController.create);
eventsroutes.get('/:id', EventsController.find);

eventsroutes.use('/:event_id/sessions', sessionsRoutes);

export default eventsroutes;
