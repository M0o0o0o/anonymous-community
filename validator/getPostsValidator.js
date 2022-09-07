const { query } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function getPostsValidator() {
  return [
    query("page")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.REQUIRED)
      .trim()
      .isInt()
      .withMessage(errorCodes.ONLYINT),
    index,
  ];
}

module.exports = { getPostsValidator };
