const express = require('express');
const dotenv = require('dotenv');
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config();
app.use("/api", routes);

module.exports = app;
