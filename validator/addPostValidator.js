const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function addPostValidator() {
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
    body("password")
      .notEmpty()
      .bail()
      .withMessage(errorCodes.required)
      .trim()
      .isLength({ min: 8, max: 16 })
      .bail()
      .withMessage(errorCodes.wrongPwdFormat)
      .matches(/[A-za-z]/)
      .bail()
      .withMessage(errorCodes.wrongPwdFormat)
      .matches(/[~!@#$%^&*()_+|<>?:{}]/)
      .bail()
      .withMessage(errorCodes.wrongPwdFormat)
      .matches(/[0-9]/)
      .withMessage(errorCodes.wrongPwdFormat),
    body("nickname")
      .optional()
      .isLength({ max: 20 })
      .withMessage(errorCodes.wrongFormat),
    index,
  ];
}

module.exports = { addPostValidator };
