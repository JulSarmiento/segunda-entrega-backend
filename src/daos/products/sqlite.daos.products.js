const Container = require('../../containers/sqlite.container');

class Producst extends Container {
  constructor() {
    super('products');
  }
} 

module.exports = Producst;