const DATA_CORE = process.env.DATA_CORE || 'memory';

const products = require(`./products/${DATA_CORE}.daos.products`);
const carts = require(`./cart/${DATA_CORE}.daos.cart`);

module.exports = { 
  products,
  carts,
};