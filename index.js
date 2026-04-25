const express = require("express");
const configureDB = require("./src/config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

configureDB();

//middlewares
app.use(express.json());

//testing routes
app.get("/", (req, res) => {
  res.send("checking APIs is running");
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});