const express = require('express');
const dotenv = require('dotenv');
const routes = require("./routes");
const app = express();
const  cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

dotenv.config();
app.use("/api", routes);

module.exports = app;
