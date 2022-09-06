/* eslint-disable no-useless-catch */
const { boardRepository } = require("../repository");
const bcrypt = require("bcrypt");
const addPost = async (data) => {
  try {
    return await boardRepository.createPost(data);
  } catch (err) {
    throw err;
  }
};
const getPost = async (id) => {
  try {
    const post = await boardRepository.findPost(id);
    return {
      board_id: post.board_id,
      nickname: post.nickname,
      title: post.title,
      content: post.content,
      weather: post.weather,
      updatedAt: post.updatedAt,
    };
  } catch (err) {
    throw err;
  }
};
const getPosts = async (page) => {
  try {
    const posts = await boardRepository.findPosts(page);
    return posts;
  } catch (err) {
    throw err;
  }
};
const setPost = async (data) => {
  try {
    const post = await boardRepository.findPost(data.board_id);
    if (post === null) {
      throw new Error("존재하지 않는 게시글입니다.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      post.password
    );

    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    return await boardRepository.updatePost(data.board_id, data.data);
  } catch (err) {
    throw err;
  }
};
const deletePost = async (data) => {
  try {
    const post = await boardRepository.findPost(data.board_id);
    if (post === null) {
      throw new Error("존재하지 않는 게시글입니다.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      post.password
    );

    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    return await boardRepository.destroyPost(data.board_id);
  } catch (err) {
    throw err;
  }
};

module.exports = { addPost, getPost, getPosts, setPost, deletePost };
