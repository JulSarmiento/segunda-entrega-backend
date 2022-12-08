// This create the table for products
const knexCofig = require('../config');
const knex = require('knex')(knexCofig);

// products table
knex.schema.createTable('products', (table) => {
  table.increments('id'),
  table.string('name').notNullable(),  
  table.string('description').notNullable(),
  table.string('code').notNullable(),
  table.string('thumbnail').notNullable(),
  table.integer('price').notNullable(),
  table.integer('stock').notNullable(),
  table.timestamp('timestamp').defaultTo(knex.fn.now())
}).then(() => {
  console.info('Table created');

}).catch((err) => {
  console.error(err)

}).finally(() => {
  knex.destroy();

});

// cart table
knex.schema.createTable('carts', (table) => {
  table.increments('id'),
  table.uuid('uuid').notNullable(),
  table.json('products').notNullable(),
  table.timestamp('created_at').defaultTo(knex.fn.now())
}).then(() => {
  console.info('Table created');

}).catch((err) => {
  console.error(err)

}).finally(() => {
  knex.destroy();

});

