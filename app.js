require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("server is working");
});
app.use("/product", require("./router/api.router"));
app.listen(PORT);
console.log("server is working at http://localhost:3000");
