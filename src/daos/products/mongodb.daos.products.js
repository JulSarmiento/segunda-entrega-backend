const Container = require('../../containers/mongoDb.container');
const mongoConfig = require('../../utilities/mongo');

class Products extends Container {
  constructor(){
    super(mongoConfig, 'products');
  }
}

module.exports = new Products();