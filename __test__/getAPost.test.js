const request = require("supertest");
const app = require("../app");

describe("----------단일 게시글 조회----------", () => {
  const password = "!@RGd352";
  let location = "";
  it("게시글 조회를 위한 게시글 생성", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: "게시글 내용",
        nickname: "글쓴이",
        password,
      })
      .expect((res) => {
        location = res.header.location;
      })
      .expect(201, done);
  });

  it("게시글 조회", (done) => {
    request(app).get(location).send().expect(200, done);
  });

  it("존재하지 않는 게시글 조회", (done) => {
    request(app).get("/board/123123").send().expect(404, done);
  });
});
