import { Router } from 'express';

import SessionsAvailabilityController from '../controllers/SessionsAvailabilityController';

const sessionsRoutes = Router();

sessionsRoutes.get(
  '/:session_id/availability',
  SessionsAvailabilityController.index,
);

export default sessionsRoutes;
