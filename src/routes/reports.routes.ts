import { Router } from 'express';

import ReportsController from '../controllers/ReportsController';
import authMiddleware from '../middlewares/auth';

const reportsroutes = Router();

reportsroutes.get('/', ReportsController.index);
// reportsroutes.get(
//   '/avaliable_sessions',
//   authMiddleware,
//   ReportsController.avaliableSessions,
// );

export default reportsroutes;
