const {v4: uuidv4} = require('uuid');
const admin = require('firebase-admin');
const serviceAcount = require('../config/firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAcount),
});

class Container{
  constructor( db ) {
    this.db = db;
  }

  db = admin.firestore();
  query = db.collection(`${this.db}`);

  async create(data){
    try{
      data.id = this.db.length > 0 ? this.db[this.db.length - 1].id + 1 : 1;
      let doc = this.query.doc(`${uuidv4()}`);
      await doc.create(data);
      return data.id;

    }catch(err){
      throw new Error(`Cannot add the element: ${err}`);
    } 
  }

  async getAll(){
    try{
      let data = await this.query.get();
      if(data.empty) throw new Error("The array is empty");
      let docs = data.docs;
      return docs.map(doc => doc.data());

    }catch(err){
      throw new Error(`Cannot read the file: ${err}`);
    }
  }

  async getById(id){
    try{
      let data = this.query.doc(id);
      if(!data) throw new Error("Document does not exist");
      let item = await data.get();
      return item.data();

    }catch(err){
      throw new Error(`Cannot read the file: ${err}`);
    }
  }

  async update(id, data){
    try{
      let doc = this.query.doc(id);
      await doc.update(data);
      return data;

    }catch(err){
      console.log(err);
    }
  }

  async deleteAll(){
    try{
      let data = await this.query.get();
      let docs = data.docs;
      docs.forEach(doc => doc.delete());

    }catch(err){
      console.log(err);
    }
  }

  async deleteById(id){
    try{
      let doc = this.query.doc(id);
      await doc.delete();

    }catch(err){
      console.log(err);
    }
  }
}

module.exports = Container;