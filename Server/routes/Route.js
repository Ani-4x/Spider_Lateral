import express from 'express';

import { addUser } from '../controller/User-controller.js';

const  Route = express.Router();


Route.post('/add', addUser)

export default Route;