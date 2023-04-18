// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';
import { ConnectToDb } from './config/connectToDb.js';
import { postRouter } from './src/routes/Posts.js';
import cors from 'cors';

// importing env variables
dotenv.config();

ConnectToDb();

// creating application level middleware
const app = express();

app.use(cors());
app.use(express.json());

// routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.use('/posts', postRouter);

// Starting the server

app.listen(process.env.PORT, () =>
  console.log(`Server started at http://localhost:${process.env.PORT}/  `)
);
