const Container = require('../../containers/files.container');

class Products extends Container {
  constructor(){
    super('products');
  }
}

module.exports = new Products();