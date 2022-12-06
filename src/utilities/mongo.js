const mongoose = require('mongoose');
require('dotenv').config();

const mongoConfig = async () => {

  const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
  const MONGO_DB = process.env.MONGO_DB || 'ecommerce';
  const CONNECTION_STRING = `${MONGO_URL}/${MONGO_DB}`;

  const MOONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  await mongoose.connect(CONNECTION_STRING, MOONGOOSE_OPTIONS);
  console.log('Connected to MongoDb');
}


module.exports = mongoConfig;




