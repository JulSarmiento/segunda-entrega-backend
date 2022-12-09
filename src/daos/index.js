const {dao} = require('../config');

const products = require(`./products/${dao}.daos.products`);
const carts = require(`./cart/${dao}.daos.cart`);

module.exports = { 
  products,
  carts,
};