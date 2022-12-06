class Container {
  constructor(products = []){
    this.products = products;
  }

  create(product){
    try{
      product.id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;    
      this.products.push(product)
      console.log('Product id' ,product.id)
      return product.id;

    }catch(err){
      console.log(err);
    }
  }

  getAll() {
    try{
      return this.products; 
    }catch(err){  
      console.log(err);
    }
  }

  getById(id) {
    try{
      return this.products.find(product => product.id === id);  
    }catch(err){
      console.log(err);
    }
  }

  update(productid, data) {
    try{
      const current = this.getById(productid);
      const currentIndex = this.products.indexOf(current);
      this.products[currentIndex] = {...current, ...data};
      return this.products[currentIndex]
    }catch(err){
      console.log(err);
    }
  }

  deleteAll(){
    try {
      this.products = [];
    }catch(err){
      console.log(err);
    }
  }

  deleteById(id){
    try{
      this.products = this.products.filter(product => product.id !== id); 
    }catch(err){
      console.log(err);
    }
  }
  
}

module.exports = Container;