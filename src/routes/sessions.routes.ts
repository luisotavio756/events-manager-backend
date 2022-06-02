import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

import SessionsAvailabilityController from '../controllers/SessionsAvailabilityController';

const sessionsRoutes = Router({ mergeParams: true });

sessionsRoutes.get('/', SessionsController.index);
sessionsRoutes.post('/', SessionsController.store);
sessionsRoutes.delete('/:session_id', SessionsController.destroy);
sessionsRoutes.get(
  '/:session_id/availability',
  SessionsAvailabilityController.index,
);

export default sessionsRoutes;
