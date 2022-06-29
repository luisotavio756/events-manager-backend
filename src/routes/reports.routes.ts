import { Router } from 'express';

import ReportsController from '../controllers/ReportsController';
import authMiddleware from '../middlewares/auth';

const reportsroutes = Router();

reportsroutes.post('/', authMiddleware, ReportsController.index);

export default reportsroutes;
