async function isProductExist(req, res, next) {
  const { id_prod } = req.params;
  const selectedProduct = await products.getbyId(Number(id_prod));
  req.selectedProduct = selectedProduct;

  if (!selectedProduct) {
    return res.status(400).json({
      success: false,
      message: "Product does not exist.",
    });
  }
  next();
}

module.exports = isProductExist;
