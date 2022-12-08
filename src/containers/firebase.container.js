const {v4: uuidv4} = require('uuid');
const admin = require('firebase-admin');
const serviceAcount = require('../../firestore-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAcount),
});

class Container{
  constructor( collection ) {
    this.collection = collection;
    this.db = admin.firestore();
    this.query = this.db.collection(this.collection);
  }

  async create(data){
    try{
      const id = uuidv4();
      data.timestamp = new Date().toLocaleString();
      const doc = this.query.doc(id);
      await doc.create(data);
      return id;

    }catch(err){
      throw new Error(`Cannot add the element: ${err}`);
    } 
  }

  async getAll(){
    try{
      const data = await this.query.get();
      if(data.empty) {
        return [];
      };
      const docs = data.docs;
      return docs.map(doc => ({id: doc.id, ...doc.data()}));

    }catch(err){
      throw new Error(`Cannot read the collection: ${err}`);
    }
  }

  async getById(id){
    try{
      const data = this.query.doc(id);
      if(!data) throw new Error("Document does not exist");
      const item = await data.get();
      return item.data();

    }catch(err){
      throw new Error(`Cannot find the selected element: ${err}`);
    }
  }

  async update(id, data){
    try{
      const doc = this.query.doc(id);
      await doc.update(data);
      return data;

    }catch(err){
      throw new Error(`Cannot update the selected element: ${err}`);
    }
  }

  async deleteById(id){
    try{
      const doc = this.query.doc(id);
      await doc.delete();
      return id;

    }catch(err){
      throw new Error(`Cannot delete the selected element: ${err}`);
    }
  }
}

module.exports = Container;