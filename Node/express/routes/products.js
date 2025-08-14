const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
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
    res
      .status(201)
      .send({ message: "Data Inserted successfully", data: results.rows[0] });
  } catch (error) {
    if (err) {
      res.status(500).send({ error: err });
    }
  }
});

//get products by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (results.rowCount === 0) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send(results.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

//update products
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { image, name, price, description } = req.body;

  try {
    const results = await pool.query(
      "UPDATE products SET image = $1, name = $2, price = $3, description = $4 WHERE id = $5 RETURNING *",
      [image, name, price, description, id]
    );

    if (results.rowCount === 0) {
      return res.status(404).send({ error: "Product not found." });
    }

    res
      .status(201)
      .send({ message: "Data updated successfully", data: results.rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//DELETE PRODUCTS
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );
    if (results.rows.length === 0) {
      res.status(200).send("No products found to delete");
    }

    res
      .status(200)
      .send({ message: "Data deleted successfully", data: results.rows });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
