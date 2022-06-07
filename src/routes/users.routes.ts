import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import AuthenticationController from '../controllers/AuthenticationController';

const usersroutes = Router();

usersroutes.get('/', UsersController.index);
usersroutes.post('/', UsersController.create);

usersroutes.post('/auth', AuthenticationController.store);

export default usersroutes;
