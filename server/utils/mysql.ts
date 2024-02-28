import { createPool, Pool, PoolOptions } from 'mysql2/promise';

const poolOptions: PoolOptions = {
  host: process.env.DEV_DB_HOST,
  user: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PW,
  database: process.env.DEV_DB_NAME,
  port: parseInt(process.env.DEV_DB_PORT || '3306', 10),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const mysql: Pool = createPool(poolOptions);

export default mysql;