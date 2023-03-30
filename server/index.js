const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect(
  'mongodb+srv://pixelartme:1234Dcba@crud.9gm1amu.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});
