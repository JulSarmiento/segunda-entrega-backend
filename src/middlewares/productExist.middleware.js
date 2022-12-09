const productExist = (products) => {
  return async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      return next();
    }
    const current = await products.getById(id);

    if(!current) {
      res.status(400).json({
        success: false,
        error: `Product not found.`,
      });
    } else {
      req.products = current;
      next();
    }
  };
};

module.exports = productExist;
