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
  pool.connect((err, client, release) => {
    if(err){
      res.status(500).send(err);
    }

    res.status(200).send("Connection Established");
  });
  
});

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
