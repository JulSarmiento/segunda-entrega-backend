const CONTAINER = process.env.CONTAINER || 'mongodb';

const products = require(`./daos/products/${CONTAINER}.daos.products`);
const cart = require(`./daos/cart/${CONTAINER}.daos.cart`);

