import { Router } from 'express';

import EventsController from '../controllers/EventsController';

const eventsroutes = Router();

eventsroutes.get('/', EventsController.index);
eventsroutes.post('/', EventsController.create);

export default eventsroutes;
