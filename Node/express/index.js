const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const products = require("./routes/products");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/products", products);


app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
