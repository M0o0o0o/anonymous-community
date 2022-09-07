const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function addPostValidator() {
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
      .isLength({ max: 1000 })
      .withMessage(errorCodes.EXCEEDLENGTH(200)),
    body("password")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.REQUIRED)
      .trim()
      .isLength({ min: 8, max: 16 })
      .bail()
      .withMessage(errorCodes.WRONGPWD)
      .matches(/[A-za-z]/)
      .bail()
      .withMessage(errorCodes.WRONGPWD)
      .matches(/[~!@#$%^&*()_+|<>?:{}]/)
      .bail()
      .withMessage(errorCodes.WRONGPWD)
      .matches(/[0-9]/)
      .withMessage(errorCodes.WRONGPWD),
    body("nickname")
      .optional()
      .isLength({ max: 20 })
      .withMessage(errorCodes.EXCEEDLENGTH(20)),
    index,
  ];
}

module.exports = { addPostValidator };
