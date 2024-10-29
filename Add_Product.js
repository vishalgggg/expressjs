const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <input type="text" name="title" placeholder="Product Title">
      <input type="text" name="size" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

app.post('/add-product', (req, res) => {
  console.log(req.body); // { title: '...', size: '...' }
  res.redirect('/');
});

app.listen(3000);
