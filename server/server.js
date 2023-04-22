import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// importing dotenv variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// defining the route
app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});

/*Connection to mongoDb*/
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to Mongo DB database!');
  app.listen(PORT, () => console.log(`Server started at ${PORT}`));
} catch (error) {
  console.log(error);
}

// running the server
