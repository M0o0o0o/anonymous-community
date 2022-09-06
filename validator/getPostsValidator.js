const { query } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function getPostsValidator() {
  return [
    query("page")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isInt()
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = { getPostsValidator };
