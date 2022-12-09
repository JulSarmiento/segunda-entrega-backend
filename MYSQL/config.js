module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.SLQ_HOST || 'localhost',
    user: process.env.SLQ_USER || 'root',
    password: process.env.SLQ_PASSWORD || '12345',
    database: process.env.SLQ_DATABASE || 'ecommerce'
  }
};