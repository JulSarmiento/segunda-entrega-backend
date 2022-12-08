const Container = require('../../containers/files.container');

class Cart extends Container {
  constructor(){
    super('carts');
  }
}

module.exports = new Cart();