const fs = require("fs");
const readFiles = require("../utilities/readfile");
const saveFiles = require("../utilities/saveFile");

class Container {
  constructor(filename) {
    this.filename = `db/${filename}.txt`;
  }

  async create(value){
    const array = await this.getAll();
    value.id = array.length > 0 ? array[array.length -1].id + 1 : 1;

    try{
      array.push(value);
      saveFiles(this.filename, array);
      return value.id;
    }
    catch (err) {
      console.log(err);
    }
  };

  async getbyId(valueId){
    
    try{
      const array = await readFiles(this.filename);
      return array.find(value => value.id === valueId);
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

  async deleteById(valueId){
    try{
      const array = await readFiles(this.filename);
      saveFiles(this.filename, array.filter(value => value.id !== valueId));
    }
    catch (err) {
      console.log(`No fue posible elimenar el valueo: ${err}`)
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