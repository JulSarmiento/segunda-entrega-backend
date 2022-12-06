const Container = require('../../containers/mongodb.container');
const mongoConfig = require('../../../src/utilities/mongo');

class Cart extends Container {
  constructor(){
    super(mongoConfig, 'cart');
  }
}

module.exports = new Cart();