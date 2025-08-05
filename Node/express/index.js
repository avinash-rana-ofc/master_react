const express = require("express");
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "local_db",
  port: 5432
});

// you can also use async/await

//await pool.end();

const PORT = process.env.PORT;
const app = express();

app.get("/", async(req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT NOW()');
    console.log(result.rows[0]);
    res.status(200).json({"Status" : 200, "Message": "connection successful"});
  } catch (error) {
    console.log("Query error", error.stack);
  } finally{
    client.release();
  }
});

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
