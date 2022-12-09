const Container = require('../../containers/mysql.container');

class Products extends Container { 
  constructor(){
    super('products');
  }
}

module.exports = new Products();