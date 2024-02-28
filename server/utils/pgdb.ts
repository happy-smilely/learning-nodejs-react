const Pool = require("pg").Pool;

// user not username!!!!!!
const prodPool = new Pool({
  user: process.env.PROD_DB_USERNAME,
  password: process.env.PROD_DB_PW,
  host: process.env.PROD_DB_HOST,
  port: process.env.PROD_DB_PORT,
  database: process.env.PROD_DB_NAME,
});

export default prodPool;
