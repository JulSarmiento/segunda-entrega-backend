const Container = require('../../containers/files.container');

class Cart extends Container {
  constructor(){
    super('cart');
  }
}

module.exports = new Cart();