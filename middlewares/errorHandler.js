function errorHandler(error, req, res, next) {
  console.log("\x1b[33m%s\x1b[0m", error.stack);
  const errorMessage = {
    error: {
      message: error.message,
    },
  };
  if (error.name) {
    errorMessage.error.field = error.name;
  }
  res.status(400).json(errorMessage);
}

module.exports = errorHandler;
