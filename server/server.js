// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';
import { ConnectToDb } from './config/connectToDb.js';

// importing ENV variables
dotenv.config();

// Starting the Connection to Db
ConnectToDb();

// Creating application level middleware
const app = express();

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Starting the server

app.listen(process.env.PORT, () =>
  console.log(`Running on Port ${process.env.PORT}`)
);
