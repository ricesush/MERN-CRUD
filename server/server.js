// Importing dependecies
import express from 'express';
import dotenv from 'dotenv';

// Importing ENV variables
dotenv.config();

// Creating application level middleware
const app = express();

// Routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Runing the server
app.listen(process.env.PORT, () =>
  console.log(`Running on PORT: ${process.env.PORT}`)
);
