const { MongoClient, ObjectId } = require("mongodb");

const config = {
  url: process.env.MONGO_URL,
  dbName: process.env.MONGO_DB,
};

class Container {
  constructor(collection) {
    this.collection = collection;
  }

  async connect() {
    const client = new MongoClient(config.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    return client;
  }

  async create(data) {
    try {
      const connection = await this.connect();
      const db = connection.db(config.dbName);
      const collection = db.collection(this.collection);
      data.timestamp = new Date().toLocaleString();
      const result = await collection.insertOne(data);

      await connection.close();
      return result.insertedId;
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    try {
      const connection = await this.connect();
      const db = connection.db(config.dbName);
      const collection = db.collection(this.collection);

      const result = await collection.find().toArray();
      await connection.close();

      return result;
    } catch (err) {
      console.error("Error getting all", this.collection, err);
    }
  }

  async getById(id) {
    try {
      const connection = await this.connect();
      const db = connection.db(config.dbName);
      const collection = db.collection(this.collection);

      const result = await collection.findOne({ _id: ObjectId(id) });
      await connection.close();

      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, data) {
    try {
      const connection = await this.connect();
      const db = connection.db(config.dbName);
      const collection = db.collection(this.collection);

      await collection.updateOne({ _id: ObjectId(id) }, { $set: data });
      const result = await collection.findOne({ _id: ObjectId(id) });
      await connection.close();

      return result;
    } catch (err) {
      console.log(err);
    } 
  }

  async deleteById(id) {
    try {
      const connection = await this.connect();
      const db = connection.db(config.dbName);
      const collection = db.collection(this.collection);

      const result = await collection.deleteOne({ _id: ObjectId(id) });
      await connection.close();

      return result;
    } catch (err) {
      console.log(err);

    }
  }
}

module.exports = Container;
