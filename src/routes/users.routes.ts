import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersroutes = Router();

usersroutes.get('/', UsersController.index);
usersroutes.post('/', UsersController.create);

export default usersroutes;
