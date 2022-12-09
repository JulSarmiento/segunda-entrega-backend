const Container = require("../../containers/memory.container");

class Products extends Container {
  constructor() {
    super();

    //Test mode
    
    // [1, 2, 3, 4, 5].forEach((value) => {
    //   this.create({
    //     name: `Collar Elegant ${value}`,
    //     // id: value,
    //     description:
    //       "Conformado por Piedras de Murano de alta calidad y Acero Inoxidable con nylon de pesca de mar, pertime que tu compañero/a fiel saque a relucir su lado mas divo y a ser el foco de todas las miradas, especialmente, las de tus vecinos.",
    //     code: `E0${value}`,
    //     thumbnail:
    //       "ttps://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/products%2Fcollar-elegant%2Fcollar-elegant-ambar-back.jpg?alt=media&token=8985f23e-b5f3-4a34-a388-cef4ed8abb4d",
    //     price: 1520000 * Math.random() * value,
    //     stock: 15 + value,
    //     timestamp: "12/8/2022, 9:36:34 PM",
    //   });
    // });
  }
}

module.exports = new Products();
