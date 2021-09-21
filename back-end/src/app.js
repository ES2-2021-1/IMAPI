const express = require('express');
const routes = require("./routes");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

app.use("/api", routes);

module.exports = app;
