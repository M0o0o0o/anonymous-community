const request = require("supertest");
const app = require("../app");

describe("----------게시글 삭제----------", () => {
  const password = "!@RGd352";
  let location = "";
  it("게시글 삭제를 위한 게시글 생성", (done) => {
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

  it("게시글 삭제 시 비밀번호가 일치하지 않은 경우", (done) => {
    request(app)
      .delete(location)
      .send({ password: password + "123" })
      .expect(400, done);
  });

  it("정상 게시글 삭제", (done) => {
    request(app).delete(location).send({ password }).expect(200, done);
  });

  it("존재하지 않는 게시글 삭제 시도", (done) => {
    request(app).delete("/board/123213").send({ password }).expect(400, done);
  });
});
