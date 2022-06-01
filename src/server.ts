import express from 'express';
import cors from 'cors';
import { testConnection } from './database/connection';

import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

try {
  testConnection();

  app.listen(3000, () => {
    console.log('Server started on port 3000!');
  });
} catch (error) {
  console.error(error);
}
