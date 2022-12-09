const express = require('express');
const router = express.Router();
const productsRouter = require('./products/products.router');
const cartsRouter = require('./carts/carts.router');

router.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    health: 'OK',
    enviroment: process.env.NODE_ENV,
  });
})
  .use('/products', productsRouter)
  .use('/carts', cartsRouter)


module.exports = router;