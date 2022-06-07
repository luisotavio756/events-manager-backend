import { Router } from 'express';

import SalesController from '../controllers/SalesController';

const salesRoutes = Router();

salesRoutes.post('/', SalesController.create);

export default salesRoutes;
