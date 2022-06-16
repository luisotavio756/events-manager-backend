import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import AuthenticationController from '../controllers/AuthenticationController';
import authMiddleware from '../middlewares/auth'

const usersroutes = Router();

usersroutes.get('/', authMiddleware, UsersController.index);
usersroutes.post('/', UsersController.create);

usersroutes.post('/auth', AuthenticationController.store);

export default usersroutes;
