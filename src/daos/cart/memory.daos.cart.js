const Container = require('../../containers/memory.container');

class Cart extends Container {
  constructor(){
    super('cart');
  }
}

module.exports = new Cart();