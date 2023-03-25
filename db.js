const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  pasword: "1",
  host: "Localhost",
  port: 5432,
  database: "",
});

module.exports = pool;
