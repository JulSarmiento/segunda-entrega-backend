const Container = require("../../containers/files.container");

const Product = require("../product/files.daos.product");

class Cart extends Container {
  constructor() {
    super("carts");
  }

  async create(value) {
    const { products, ...data } = value;
    const allproducts = await Product.getAll();
    console.log("All products: ", allproducts)
    data.products = allproducts.filter((product) =>
      products.includes(product.id)
    );
    console.log("value: ", data);
    return super.create(data);
  }
}

module.exports = new Cart();
