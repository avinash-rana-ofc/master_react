const express = require("express");
require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "local_db",
  port: 5432,
});


const PORT = process.env.PORT;
const router = express.Router();

//test connection
router.get("/", async (req, res) => {
  const rows = await pool.query("SELECT * FROM products", (err, result) => {
    if(err){
      res.status(500).send(err);
    }

    res.status(200).send(result.rows);
  })
});

module.exports = router;