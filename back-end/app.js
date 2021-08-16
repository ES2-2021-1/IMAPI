express = require('express');
dotenv = require('dotenv');

const app = express();

dotenv.config();

app.get('/', function(req, res){
    res.send('Bye world!');
});

module.exports = app;