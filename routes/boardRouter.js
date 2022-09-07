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

/**
 * @swagger
 * paths:
 *   /posts:
 *    post:
 *      summary:  "게시판 게시글 생성"
 *      description: "게시글 생성 시 사용자의 IP를 기준으로 해당 지역의 날씨 데이터를 함께 저장합니다."
 *      tags: [Board]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 생성할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {title : 생성할 제목, content : 생성할 내용, name: 작성자, password: 게시글 비밀번호}
 *      responses:
 *        "201":
 *          description: "게시글 생성에 성공하면 id, 제목, 내용, 작성자, 날씨 데이터가 담긴 게시글 객체를 넘깁니다."
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                          {
 *                              "id": id_value,
 *                              "title": "test title",
 *                              "content": "test content",
 *                              "nickname": "익명의 글쓴이",
 *                              "weather": "CDN URL이 반환됩니다.!",
 *                          }
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  {
 *                    error: [
 *                        {
 *                           message: error.message,
 *                           field: error.name
 *                        }
 *                     ]
 *                  }
 *
 */

/**
 * @swagger
 * paths:
 *   /posts/?page:
 *    get:
 *      summary:  "게시판 게시글 전체 조회"
 *      description: "pagination을 활용한 여러 게시글을 조회합니다."
 *      tags: [Board]
 *      parameters :
 *        - in : query
 *          name : page
 *          required : true
 *          description : 게시판의 페이지 번호
 *          schema :
 *             type : int
 *      responses:
 *        "200":
 *          description: " 20개씩 최근 생성일 순으로 조회"
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type : object
 *                  example:
 *                        [
 *                            {
 *                                "id": id_value,
 *                                "title": "test title",
 *                                "content": "test content",
 *                                "name": "익명의 글쓴이",
 *                                "weather": "CDN URL",
 *                            },
 *                            {
 *                                "id": id_value,
 *                                "title": "test title",
 *                                "content": "test content",
 *                                "name": "익명의 글쓴이",
 *                                "weather": "CDN URL",
 *                            },
 *                          ]
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *    get:
 *      summary:  "특정 게시글 조회"
 *      description: "게시글을 조회합니다."
 *      tags: [Board]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 게시글 id
 *          schema :
 *             type : int
 *      responses:
 *        "200":
 *          description: "게시판의 해당 id를 가진 게시글 반환합니다."
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  type : object
 *                  example:
 *                          {
 *                              "id": id_value,
 *                              "title": "test title",
 *                              "content": "test content",
 *                              "name": "annoy",
 *                              "weather": "CDN URL",
 *                          }
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *    patch:
 *      summary:  "특정 게시글 수정"
 *      description: "게시글 생성 시 함께 입력한 비밀번호가 일치해야 게시글 수정이 가능합니다."
 *      tags: [Board]
 *      parameters :
 *         - in : path
 *           name : id
 *           required : true
 *           description : 게시글 id
 *           schema :
 *           type : int
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {title : 수정할 제목, content : 수정할 내용, password: 게시판 생성 시 입력한 비밀번호}
 *      responses:
 *        "200":
 *          description: "게시판의 해당 id를 가진 수정된 게시글 반환"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  type : object
 *                  example:
 *                          {
 *                              "id": id_value,
 *                              "title": "test title",
 *                              "content": "test content",
 *                              "name": "익명",
 *                              "weather": "CDN URL",
 *                          }
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *    delete:
 *      summary:  "게시글 삭제"
 *      description: "게시글 생성 시 입력한 비밀번호가 일치하는 경우에만 게시글 삭제가 가능합니다."
 *      tags: [Board]
 *      parameters :
 *         - in : path
 *           name : id
 *           required : true
 *           description : 게시글 id
 *           schema :
 *           type : int
 *         - in : body
 *           name : data
 *           required : true
 *           description : 게시판 생성 시 입력한 비밀번호
 *           schema :
 *              type : object
 *              example :
 *                {password: 게시판 비밀번호}
 *      responses:
 *        "200":
 *          description: "게시판의 해당 id를 가진 게시글을 삭제하고 200코드 반환"
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */
module.exports = router;
