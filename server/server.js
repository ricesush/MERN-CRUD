// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';
import { ConnectToDb } from './config/connectToDb.js';

// importing env variables
dotenv.config();

ConnectToDb();

// creating application level middleware
const app = express();

// routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Starting the server

app.listen(process.env.PORT, () =>
  console.log(`Server started at http://localhost:${process.env.PORT}/  `)
);
