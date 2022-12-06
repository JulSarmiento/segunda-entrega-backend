const Container = require('../../containers/memory.container');

class Products extends Container {
  constructor(){
    super('products');
  }
}

module.exports = new Products();