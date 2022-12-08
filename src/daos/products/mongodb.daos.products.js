const Container = require('../../containers/mongoDb.container');

class Products extends Container {
  constructor(){
    super('products');
  }
}

module.exports = new Products();