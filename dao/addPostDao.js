const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
module.exports = async (body) => {
  return {
    board_id: uuidv4(),
    title: body.title,
    content: body.content,
    password: await bcrypt.hash(body.password, 12),
    nickname: body.nickname !== undefined ? body.nickname : "익명",
  };
};
