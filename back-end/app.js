import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', function(req, res){
    res.send('Bye world!');
});

export default app;