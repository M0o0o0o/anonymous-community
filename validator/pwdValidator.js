const { body } = require("express-validator");
const index = require("./index");
const errorCodes = require("../codes/errorCodes");

function pwdValidator() {
  return [
    body("password").notEmpty().bail().withMessage(errorCodes.REQUIRED),
    index,
  ];
}

module.exports = { pwdValidator };
