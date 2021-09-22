const express = require('express');
const dotenv = require('dotenv');
const routes = require("./routes");
const  cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config();

app.use(cors());
app.use("/api", routes);

module.exports = app;
