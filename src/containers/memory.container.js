class Container {
  constructor(values = []){
    this.values = values;
  }

  async create(value){
    try{
      value.id = this.values.length > 0 ? this.values[this.values.length - 1].id + 1 : 1;    
      this.values.push(value)
      console.log('value id' ,value.id)
      return value.id;

    }catch(err){
      console.log(err);
    }
  }

  async getAll() {
    try{
      return this.values; 
    }catch(err){  
      console.log(err);
    }
  }

  async getById(id) {
    try{
      return this.values.find(value => value.id === id);  
    }catch(err){
      console.log(err);
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
      console.log(err);
    }
  }

  deleteById(id){
    try{
      this.values = this.values.filter(value => value.id !== id); 
    }catch(err){
      console.log(err);
    }
  }
  
}

module.exports = Container;