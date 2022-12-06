const Container = require('../../containers/firebase.container');

class Cart extends Container {
  constructor(){
    super('cart');
  }
}

module.exports = new Cart();