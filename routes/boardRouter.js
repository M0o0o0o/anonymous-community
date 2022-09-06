const express = require("express");
const router = express.Router();
const { boardController } = require("../controller");
const { addPostValidator } = require("../validator/addPostValidator");
const { getPostsValidator } = require("../validator/getPostsValidator");
const { putPostValidator } = require("../validator/putPostValidator");
const { pwdValidator } = require("../validator/pwdValidator");

router.post("/", addPostValidator(), boardController.addPost);
router.get("/", getPostsValidator(), boardController.getPosts);
router.get("/:id", boardController.getPost);
router.put("/:id", pwdValidator(), putPostValidator(), boardController.setPost);
router.delete("/:id", pwdValidator(), boardController.deletePost);

module.exports = router;
