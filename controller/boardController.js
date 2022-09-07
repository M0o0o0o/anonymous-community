/* eslint-disable no-useless-catch */
const errorCodes = require("../codes/errorCodes");
const sucessCodes = require("../codes/sucessCodes");
const addPostDao = require("../dao/addPostDao");
const deletePostDao = require("../dao/deletePostDao");
const putPostDao = require("../dao/putPostDao");
const { boardService } = require("../service");
/**
 * @Todo
 * 사용자 json 파일을 아예 잘못 넘겨준 경우도 처리하자.
 */
const addPost = async (req, res, next) => {
  try {
    const data = await addPostDao(req.body, req.ip || req.ips);

    const post = await boardService.addPost(data);

    res.location(`/board/${post.board_id}`);
    res.status(201).json({ message: sucessCodes.POSTSUCCESS });
  } catch (err) {
    next(err);
  }
};
const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await boardService.getPost(id);
    if (post === null) {
      res.status(404);
      throw new Error(errorCodes.pageNotFound);
    }
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};
const getPosts = async (req, res, next) => {
  try {
    const { page } = req.query;
    const posts = await boardService.getPosts(page);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};
const setPost = async (req, res, next) => {
  try {
    const data = putPostDao(req.params, req.body);
    const updatedPost = await boardService.setPost(data);
    res.location(`/job/${updatedPost.board_id}`);
    res.status(201).json({ message: sucessCodes.PUTSUCCUESS });
  } catch (err) {
    next(err);
  }
};
const deletePost = async (req, res, next) => {
  try {
    const data = deletePostDao(req.params.id, req.body.password);
    const deletedPost = await boardService.deletePost(data);
    if (deletedPost === 1) {
      res.status(200).json({ message: sucessCodes.DELETESUCCESS });
    }
    res.status(404).end({ message: errorCodes.pageNotFound });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPosts,
  getPost,
  setPost,
  deletePost,
  addPost,
};
