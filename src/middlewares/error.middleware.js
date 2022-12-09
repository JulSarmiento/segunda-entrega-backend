function errorHandler(err, res, _req) {
  console.log(err);
  res.status(500).send(err.message);
}

module.exports = errorHandler;