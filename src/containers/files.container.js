const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const readFiles = require("../utilities/readfile");
const saveFiles = require("../utilities/saveFile");

class Container {
  constructor(filename) {
    this.filename = `db/${filename}.txt`;
  }

  async create(value){
    const array = await this.getAll();
    if(!value) throw new Error("The value is empty");
    value.id = uuidv4();

    try{
      array.push(value);
      saveFiles(this.filename, array);
      return value.id;
    }
    catch (err) {
      throw new Error(`Cannot add the element: ${err}`);
    }
  };

  async getbyId(valueId){
    
    try{
      const array = await readFiles(this.filename);
      if(array.length === 0) throw new Error("The array is empty");
      return array.find(value => value.id === valueId);
    }
    catch (err) {
      throw new Error(`Cannot read the file: ${err}`);
    }

  };

  async getAll(){
    try{
      const data = await readFiles(this.filename);
      if(!data) throw new Error("The array is empty");
      return data
    }
    catch (err) {
      throw new Error(`Cannot read the file: ${err}`);
    }
    
  };

  async update(valueId, data){
    try{
      const array = await readFiles(this.filename);
      if(array.length === 0) throw new Error("The array is empty");
      const current = await this.getbyId(valueId);
      const currentIndex = array.indexOf(current);
      array[currentIndex] = {...current, ...data};
      saveFiles(this.filename, array);
      return array[currentIndex];

    } catch (err) {
      throw new Error(`Cannot update the element: ${err}`);
    }
  };

  async deleteById(valueId){
    try{
      const array = await readFiles(this.filename);
      if(array.length === 0) throw new Error("The array is empty");
      saveFiles(this.filename, array.filter(value => value.id !== valueId));
    }
    catch (err) {
      throw new Error(`Cannot delete the element: ${err}`)
    }
  };

  async deleteAll(){
    try {
      await fs.promises.writeFile(this.filename, "");
      return `All elements were deleted.`
    }
    catch (err) {
      console.log(err);
      throw new Error(`Cannot delete all elements: ${err}`);
    }
  };
}


module.exports = Container;