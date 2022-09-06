const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function putPostValidator() {
  return [
    body("title")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 100 })
      .withMessage(errorCodes.wrongFormat),
    body("content")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .isLength({ max: 1000 })
      .withMessage(errorCodes.wrongFormat),
    body("nickname")
      .optional()
      .isLength({ max: 20 })
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = { putPostValidator };
