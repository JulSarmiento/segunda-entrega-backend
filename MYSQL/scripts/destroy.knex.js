// This create the table for products
const knexCofig = require("../config");
const knex = require("knex")(knexCofig);

knex.schema
  .dropTableIfExists("cart_products")
  .then(async () => {
    await knex.schema.dropTableIfExists("products").then(() => {
      console.log("Dropping products table");
    });

    await knex.schema.dropTableIfExists("carts").then(() => {
      console.log("Dropping carts table");
    });
  })
  .then(() => {
    console.log("Tables deleted");
    knex.destroy();
  });
