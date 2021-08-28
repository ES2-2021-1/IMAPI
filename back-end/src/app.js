const express = require('express');
const dotenv = require('dotenv');
const routes = require("./routes");

const app = express();

dotenv.config();
app.use("/api", routes);


module.exports = app;
