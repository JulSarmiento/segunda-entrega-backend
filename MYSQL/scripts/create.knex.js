// This create the table for products
const knexCofig = require("../config");
const knex = require("knex")(knexCofig);

Promise.all([
  // products table
  knex.schema
    .createTable("products", (table) => {
      table.increments("id"),
        table.string("name").notNullable(),
        table.string("description").notNullable(),
        table.string("code").notNullable(),
        table.string("thumbnail").notNullable(),
        table.integer("price").notNullable(),
        table.integer("stock").notNullable(),
        table.timestamp("timestamp").defaultTo(knex.fn.now());
    })
    .then(() => {
      console.info("Table products created");
    })
    .catch((err) => {
      console.error(err);
    }),

  // cart table
  knex.schema
    .createTable("carts", (table) => {
      table.increments("id"),
        table.timestamp("timestamp").defaultTo(knex.fn.now());
    })
    .then(() => {
      console.info("Table carts created");
    })
    .catch((err) => {
      console.error(err);
    }),
])
  .then(() => {
    // cart products table
    knex.schema
      .createTable("cart_products", (table) => {
        table.increments("id"),
          table.integer("cart_id").unsigned().notNullable(),
          table.integer("product_id").unsigned().notNullable(),
          table.timestamp("timestamp").defaultTo(knex.fn.now()),
          table.foreign("cart_id").references("carts.id"),
          table.foreign("product_id").references("products.id");
      })
      .then(() => {
        console.info("Table carts_products created");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        knex.destroy();
      });
  })
  .finally(() => {
    knex.destroy();
  });
