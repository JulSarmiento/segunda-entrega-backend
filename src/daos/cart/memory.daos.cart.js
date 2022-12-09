const Container = require("../../containers/memory.container");
const Product = require("../../daos/products/memory.daos.products");

class Cart extends Container {
  constructor() {
    super();
  }

  async getById(id) {
    const { products: ids, ...cart } = super.getById(id);

    const allproducts = await Product.getAll();
    cart.products = allproducts.filter((product) => ids.includes(product.id));

    return cart;
  }

  async create(value) {
    const { products, ...data } = value;
    const allproducts = await Product.getAll();
    data.products = allproducts.filter((product) =>
      products.includes(product.id)
    );
    return super.create(data);
  }
}

module.exports = new Cart();
