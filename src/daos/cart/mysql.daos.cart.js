const Container = require("../../containers/mysql.container");

class Cart extends Container {
  static PRODUCTS = "products";
  static CART_PRODUCTS = "cart_products";

  constructor() {
    super("carts");
  }

  async create(value) {
    const { products, ...cart } = value;

    return this.knex.transaction(async (trx) => {
      const [cart_id] = await trx.insert(cart).into(this.tableName);

      console.log("Cart insert", cart_id);
      await trx
        .insert(products.map((product_id) => ({ cart_id, product_id })))
        .into(Cart.CART_PRODUCTS);
      return cart_id;
    });
  }

  async getById(id) {
    const cart = await this.knex(this.tableName).where({ id }).first();

    const products = await this.knex(Cart.PRODUCTS)
      .join(Cart.CART_PRODUCTS, "cart_products.product_id", "products.id")
      .where("cart_products.cart_id", id);

    return { ...cart, products };
  }
}

module.exports = new Cart();
