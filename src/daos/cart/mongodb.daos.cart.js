const Container = require('../../containers/mongodb.container');

class Cart extends Container {
  constructor(){
    super('carts');
  }
}

module.exports = new Cart();