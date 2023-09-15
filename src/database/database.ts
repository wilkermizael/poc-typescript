import pg from "pg";

const { Pool } = pg;

const configureDatebase = {
  host: "localhost",
  port: 5432,
  user: "wilkermizael",
  password: "1534",
  database: "taskdb",
};
export const db = new Pool(configureDatebase)

/*const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "wilkermizael",
  password: "1534",
  database: "taskdb",
});

export { connection };*/