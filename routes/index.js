const express = require("express");
const router = express();

router.use("/", (req, res, next) => {
  res.status(200).json({ message: "hello world" });
});
module.exports = router;
