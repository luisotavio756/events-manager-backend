import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';
import SessionsAvailabilityController from '../controllers/SessionsAvailabilityController';
import authMiddleware from '../middlewares/auth'

const sessionsRoutes = Router({ mergeParams: true });

sessionsRoutes.get('/', SessionsController.index);
sessionsRoutes.post('/', authMiddleware, SessionsController.store); 
sessionsRoutes.delete('/:session_id', authMiddleware, SessionsController.destroy);
sessionsRoutes.get( 
  '/:session_id/availability',
  SessionsAvailabilityController.index,
);

export default sessionsRoutes;
