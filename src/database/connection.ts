import knex from 'knex';
import fs from 'fs';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export function populateDatabase() {
  connection.schema.hasTable('tb_eventos').then(async exists => {
    if (!exists) {
      console.log('The tables does not exists. Creating...');

      const filePath = path.resolve(__dirname, '..', '..', 'bd_sigev.sql');

      const sql = await fs.promises.readFile(filePath);
      const sqlQuery = sql.toString();

      connection.raw(sqlQuery).then(() => {
        console.log('Tables created!');
      });
    }
  });
}

export function testConnection() {
  connection
    .raw('SELECT 1')
    .then(() => {
      console.log('PostgreSQL connected');

      populateDatabase();
    })
    .catch(error => {
      throw new Error(error);
    });
}

export default connection;
