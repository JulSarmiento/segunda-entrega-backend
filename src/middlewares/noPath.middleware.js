function noPageFound(req, res) {
  res.status(400).json({
    success: false,
    error: -2,
    metoth: `${req.method} not implemented`,
    message: `The route: ${req.path} does not exist.`,
  });
}

module.exports = noPageFound;
