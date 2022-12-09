const Container = require('../../containers/sqlite.container');

class Products extends Container {
  constructor() {
    super('products');
  }
} 

module.exports = new Products();