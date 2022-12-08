const Container = require('../../containers/firebase.container');

class Cart extends Container {
  constructor() {
    super('products');
  }
}

module.exports = new Cart();