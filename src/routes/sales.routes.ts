import { Router } from 'express';
import SalesController from '../controllers/SalesController';
import authMiddleware from '../middlewares/auth'

const salesRoutes = Router();

salesRoutes.post('/', authMiddleware, SalesController.create);

export default salesRoutes;
