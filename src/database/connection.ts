import knex from 'knex';
import fs from 'fs';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'db_sigev',
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
