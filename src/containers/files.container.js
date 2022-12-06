const fs = require("fs");
const readFiles = require("../utilities/readfile");
const saveFiles = require("../utilities/saveFile");

class Container {
  constructor(filename) {
    this.filename = `db/${filename}.txt`;
  }

  async create(product){
    const array = await this.getAll();
    product.id = array.length > 0 ? array[array.length -1].id + 1 : 1;

    try{
      array.push(product);
      saveFiles(this.filename, array);
      return product.id;
    }
    catch (err) {
      console.log(err);
    }
  };

  async getbyId(productId){
    
    try{
      const array = await readFiles(this.filename);
      return array.find(product => product.id === productId);
    }
    catch (err) {
      console.log(`Elemento no encontrado, error: ${err}.`);
    }

  };

  async getAll(){
    try{
      return await readFiles(this.filename);
    }
    catch (err) {
      console.log(err);
    }
    
  };

  async deleteById(productId){
    try{
      const array = await readFiles(this.filename);
      saveFiles(this.filename, array.filter(product => product.id !== productId));
    }
    catch (err) {
      console.log(`No fue posible elimenar el producto: ${err}`)
    }

  };

  async deleteAll(){
    try {
      const data = await fs.promises.writeFile(this.filename, "");
    }
    catch (err) {
      console.log(err);
    }
  };
}


module.exports = Container;