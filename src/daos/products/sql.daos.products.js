const Container = require('../../containers/sql.container');

class Products extends Container { 
  constructor(){
    super('products');
  }
}

module.exports = new Products();