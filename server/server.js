const express = require('express');
const products = require('./products.json');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
