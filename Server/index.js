import express from 'express';
import Connection from './database/Db.js';
import Route from './routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

app.use(cors());
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/', Route);

Connection();


const PORT = 7999;

app.listen(`${PORT}`, ()=> console.log(`Server is running on Port ${PORT}`))