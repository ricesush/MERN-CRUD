// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';

// importing env variables
dotenv.config();

// creating application level middleware
const app = express();

// routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Starting the server

app.listen(process.env.PORT, () =>
  console.log(`Server started at port: ${process.env.PORT} `)
);
