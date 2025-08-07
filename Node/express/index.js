const express = require("express");
const app = express();
require("dotenv").config();
const products = require("./routes/products");

const PORT = process.env.PORT;


app.use("/products", products);


app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
