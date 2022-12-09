const {v4: uuidv4} = require('uuid');

class Container {
  constructor(db = []){
    this.db = db;
  }

  async create(value){
    try{
      value.id = uuidv4(); 
      value.timestamp = new Date().toLocaleString();
      this.db.push(value)
      return value.id;

    } catch(err){
      throw new Error(`Cannot add the element: ${err}`);
    };
  };

  async getAll() {
    try{
      return this.db; 
    }catch(err){  
      throw new Error(`Cannot read the file: ${err}`);
    };
  };

  async getById(id) {
    try{
      return this.db.find(value => value.id === id);  
    }catch(err){
      throw new Error(`Cannot read the file: ${err}`);
    };
  };

  async update(valueid, data) {
    try{
      const current = await this.getById(valueid);
      const currentIndex = this.db.indexOf(current);
      this.db[currentIndex] = {...current, ...data};
      return this.db[currentIndex]
    }catch(err){
      console.log(err);
    };
  };

  async deleteById(id){
    try{
      this.db = this.db.filter(value => value.id !== id); 
      return this.db;
    }catch(err){
      throw new Error(`Cannot delete the element: ${err}`)
    };
  };
  
}

module.exports = Container;