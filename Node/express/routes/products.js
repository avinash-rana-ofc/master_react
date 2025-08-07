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

//get products
router.get("/", async (req, res) => {
  await pool.query("SELECT * FROM products", (err, result) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(result.rows);
  });
});

//add product
router.post("/add", async (req, res) => {
  const { image, name, price, description } = req.body;
  console.log(image, name, price, description);
  try {
    const results = await pool.query(
      "INSERT INTO products (image, name, price, description) VALUES ( $1, $2, $3, $4) RETURNING *",
      [image, name, price, description]
    );
    res.status(201).send(results.rows[0]);
  } catch (error) {
    if (err) {
      res.status(500).send({ error: err });
    }
  }
});

module.exports = router;
