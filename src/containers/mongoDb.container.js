class Container {
  constructor(config, collection) {
    this.config = config;
    this.collection = collection;
  }

  // connect to the database 
  async connect() {
    const client = await MongoClient.connect(this.config.url, { useNewUrlParser: true });
    return client.db(this.config.dbName);
  }
  

  async find(query) {
    const db = await this.connect();
    const result = await db.collection(this.collection).find(query).toArray();
    return result;
  }


}