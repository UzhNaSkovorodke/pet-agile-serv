const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1",
  host: "Localhost",
  port: 5432,
  database: "node_postgres",
});

module.exports = pool;
