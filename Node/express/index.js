const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    const data = {
        firstName : "Avinash",
        lastName : "Rana",
        age : 30
    }
    res.status(200).send(data);
});

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
});