const mongoose = require('mongoose');

class Container {
  constructor(config, collection) {
    this.config = config;
    this.collection = collection;
  }

  // connect to the database 
  async connect() {
    try{
      const db = await mongoose.connect(this.config, {useNewUrlParser: true, useUnifiedTopology: true});
      return db;
    }catch(err){
      console.log(err);
    }
  }
  

  async create(data) {
    try{
      const db = await this.connect();
      const collection = db.collection(this.collection);
      const result = await collection.insertOne(data);
      return result.id;
    }catch(err) {
      console.log(err);
    }
  }

  async getAll() {
    try{
      const db = await this.connect();
      const collection = db.collection(this.collection);
      const result = await collection.find().toArray();
      return result;
    }catch(err){
      console.log(err);
    }
  }

  async getById(id) {
    try{
      const db = await this.connect();
      const collection = db.collection(this.collection);
      const result = await collection.find({_id: id}).toArray();
      return result;

    }catch(err){
      console.log(err);
    } 
  }

  async update(id, data) {
    try{
      const db = await this.connect();
      const collection = db.collection(this.collection);
      const result = await collection.updateOne({_id: id}, {$set: data});
      return result;
    }catch(err){
      console.log(err);
    }
  } 

  async deleteAll() {
    try{
      const db = await this.connect();
      const collection = db.collection(this.collection);
      const result = await collection.deleteMany();
      return result;
    }catch(err){
      console.log(err);
    }
  }

  async deleteById(id) {
    try{
      const db = await this.connect();
      const collection = db.collection(this.collection);
      const result = await collection.deleteOne({_id: id});
      return result;
    }catch(err){
      console.log(err);
    }
  }
}