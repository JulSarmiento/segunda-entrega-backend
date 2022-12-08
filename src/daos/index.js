const CONTAINER = process.env.CONTAINER || 'mongodb';

const products = require(`./products/${CONTAINER}.daos.products`);
const carts = require(`./cart/${CONTAINER}.daos.cart`);

module.exports = { 
  products,
  carts,
};