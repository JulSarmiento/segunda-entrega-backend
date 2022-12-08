const Container = require('../../containers/sql.container');

class Cart extends Container {
  constructor(){
    super('carts');
  }
}

module.exports = new Cart();