const Container = require('../../containers/sqlite.container');

class Cart extends Container {
  constructor() {
    super('cart');
  }
}

module.exports = Cart;