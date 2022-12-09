const Container = require("../../containers/firebase.container");

class Cart extends Container {
  constructor() {
    super("cart");
  }

  async create(data) {
    data.products = data.products.map((product) =>
      this.db.doc(`products/${product}`)
    );

    console.log(data);

    return super.create(data);
  }

  async getById(id) {
    const { products, ...cart } = await super.getById(id);

    cart.products = await Promise.all(
      products.map(async (ref) => {
        const snap = await ref.get();
        const product = { id: snap.id, ...snap.data() };
        console.log(product);
        return product;
      })
    );

    return cart;
  }

  async getAll() {
    const carts = await super.getAll();
    return Promise.all(
      carts.map(async (row) => {
        const { products, ...cart } = row;
        cart.products = await Promise.all(
          products.map(async (ref) => {
            const snap = await ref.get();
            const product = { id: snap.id, ...snap.data() };
            console.log(product);
            return product;
          })
        );
        return cart;
      })
    );
  }
}

module.exports = new Cart();
