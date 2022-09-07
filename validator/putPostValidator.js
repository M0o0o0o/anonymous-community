const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function putPostValidator() {
  return [
    body("title")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.REQUIRED)
      .isLength({ max: 20 })
      .withMessage(errorCodes.EXCEEDLENGTH(20)),
    body("content")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.REQUIRED)
      .isLength({ max: 200 })
      .withMessage(errorCodes.EXCEEDLENGTH(200)),
    body("nickname")
      .optional()
      .isLength({ max: 20 })
      .withMessage(errorCodes.EXCEEDLENGTH(20)),
    index,
  ];
}

module.exports = { putPostValidator };
