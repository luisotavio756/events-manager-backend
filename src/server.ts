import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import AppError from './errors/AppError';
import { testConnection } from './database/connection';

import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  },
);

try {
  testConnection();

  app.listen(3000, () => {
    console.log('Server started on port 3000!');
  });
} catch (error) {
  console.error(error);
}
