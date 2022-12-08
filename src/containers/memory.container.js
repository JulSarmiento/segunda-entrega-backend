const {v4: uuidv4} = require('uuid');

class Container {
  constructor(values = []){
    this.values = values;
  }

  async create(value){
    try{
      value.id = uuidv4(); 
      this.values.push(value)
      console.log('value id' ,value.id)
      return value.id;

    } catch(err){
      throw new Error(`Cannot add the element: ${err}`);
    }
  }

  async getAll() {
    try{
      return this.values; 
    }catch(err){  
      throw new Error(`Cannot read the file: ${err}`);
    }
  }

  async getById(id) {
    try{
      return this.values.find(value => value.id === id);  
    }catch(err){
      throw new Error(`Cannot read the file: ${err}`);
    }
  }

  async update(valueid, data) {
    try{
      const current = this.getById(valueid);
      const currentIndex = this.values.indexOf(current);
      this.values[currentIndex] = {...current, ...data};
      return this.values[currentIndex]
    }catch(err){
      console.log(err);
    }
  }

  async deleteAll(){
    try {
      this.values = [];
    }catch(err){
      throw new Error(`Cannot delete all elements: ${err}`);
    }
  }

  deleteById(id){
    try{
      this.values = this.values.filter(value => value.id !== id); 
    }catch(err){
      throw new Error(`Cannot delete the element: ${err}`)
    }
  }
  
}

module.exports = Container;