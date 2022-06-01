import express from 'express';
import cors from 'cors';
import knex from 'knex';

import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

try {
  knex({
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'db_sigev',
    },
  });

  app.listen(3000, () => {
    console.log('Server started on port 3000!');
  });
} catch (error) {
  console.log(error);
}
