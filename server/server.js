import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get((req, res) => {
  res.json({ msg: 'Hello' });
});

try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected to MongoDB!');
  app.listen(PORT, () => console.log(`Connected to port: ${PORT}`));
} catch (error) {
  console.log(error);
}
