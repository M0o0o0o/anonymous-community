const express = require("express");
const router = express();

const boardRouter = require("./boardRouter");

router.use("/board", boardRouter);

module.exports = router;
