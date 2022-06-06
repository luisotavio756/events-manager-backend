import { Router } from 'express';

import EventsController from '../controllers/EventsController';

import sessionsRoutes from './sessions.routes';

const eventsroutes = Router();

eventsroutes.get('/', EventsController.index);
eventsroutes.post('/', EventsController.create);
eventsroutes.get('/:id', EventsController.find);

eventsroutes.use('/:event_id/sessions', sessionsRoutes);

export default eventsroutes;
