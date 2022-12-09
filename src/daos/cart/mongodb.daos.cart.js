const { ObjectId } = require("mongodb");

const Container = require("../../containers/mongodb.container");
// const Product = require("../products/mongodb.daos.products");

class Cart extends Container {
  constructor() {
    super("carts");
  }

  create(data) {
    const { products, ...cart } = data;
    cart.products = products.map((productId) => ({
      $ref: "products",
      $id: ObjectId(productId),
      $db: this.dbName,
    }));

    console.log("data", cart);
    return super.create(cart);
  }

  async getById(id) {
    const connection = await this.connect();
    const db = connection.db(this.dbName);
    const collection = db.collection(this.collection);

    const [cart] = await collection
      .aggregate([
        { $match: { _id: ObjectId(id) } },
        {
          $lookup: {
            from: "products",
            localField: "products.$id",
            foreignField: "_id",
            as: "products",
          },
        },
      ])
      .toArray();
    await connection.close();

    return cart;
  }

  async getAll() {
    const connection = await this.connect();
    const db = connection.db(this.dbName);
    const collection = db.collection(this.collection);

    const carts = collection
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "products.$id",
            foreignField: "_id",
            as: "products",
          },
        },
      ])
      .toArray();

    return carts;
  }
}

module.exports = new Cart();
