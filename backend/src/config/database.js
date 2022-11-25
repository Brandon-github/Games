import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } from '.';

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  charset: 'utf8'
});

export default pool;
