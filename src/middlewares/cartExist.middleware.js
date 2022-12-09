const cartExist = (cart) => {
  return async (req, res, next) => {
    const { id } = req.params;

    const current = await cart.getbyId(id);
    console.log("current", current);

    if(!current) {
      res.status(400).json({
        success: false,
        error: `Cart not found.`,
      });
    } else {
      req.cart = current;
      next();  
    }
  };
};

module.exports = cartExist;
