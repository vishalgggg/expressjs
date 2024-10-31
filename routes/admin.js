const express = require('express');
const router = express.Router();

router.post('/add-product', (req, res) => {
  console.log(req.body); // { title: '...', size: '...' }
  res.redirect('/');
});

router.get('/add-product', (req, res) => {
  res.send(`
    <form action="/admin/add-product" method="POST">
      <input type="text" name="title" placeholder="Product Title">
      <input type="text" name="size" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});



module.exports = router;
