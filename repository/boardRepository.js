const errorCodes = require("../codes/errorCodes");
const { Board } = require("../database/models");
const logger = require("../logger/logger");

// repository에서 발생할 수 있는 에러 모두 처리할 수 있도록 변경
// DB 연결이 끊긴 경우에 대한 예외 처리
const createPost = async (data) => {
  try {
    const post = await Board.create(data);
    return post;
  } catch (err) {
    logger.error(err);
    throw new Error(errorCodes.RETRY);
  }
};
const findPost = async (board_id) => {
  try {
    const post = await Board.findOne({ where: { board_id } });
    return post;
  } catch (err) {
    logger.error(err);
    throw new Error(errorCodes.RETRY);
  }
};
const findPosts = async (page) => {
  try {
    const posts = await Board.findAll({
      attributes: ["board_id", "title", "createdAt", "weather"],
      order: [["createdAt", "DESC"]],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return posts;
  } catch (err) {
    logger.error(err);
    throw new Error("findPosts repos error");
  }
};
const updatePost = async (board_id, data) => {
  try {
    return await Board.update(data, { where: { board_id } });
  } catch (err) {
    logger.error(err);
    throw new Error(errorCodes.RETRY);
  }
};
const destroyPost = async (board_id) => {
  try {
    return await Board.destroy({ where: { board_id } });
  } catch (err) {
    logger.error(err);
    throw new Error(errorCodes.RETRY);
  }
};

module.exports = { createPost, findPost, findPosts, updatePost, destroyPost };
