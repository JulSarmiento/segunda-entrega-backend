function errorHandler(err, res, _req, _next) {
  console.log(err);
  res.status(500).send(err.message);
}

module.exports = errorHandler;