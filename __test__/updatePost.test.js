const request = require("supertest");
const app = require("../app");

describe("----------게시글 수정----------", () => {
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

  it("정상 게시글 수정", (done) => {
    request(app)
      .put(location)
      .send({
        title: "😊😊😊",
        content: "😊😊😊😊😊",
        password,
      })
      .expect(201, done);
  });
  it("게시글 수정 시 제목에 20자 초과 입력한 경우", (done) => {
    request(app)
      .put(location)
      .send({
        title:
          "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊",
        content: "😊😊😊😊😊",
        password,
      })
      .expect(400, done);
  });

  it("게시글 수정 시 내용에 200자 초과 입력한 경우", (done) => {
    let longStr = "";
    for (let i = 0; i < 30; i++) {
      longStr += "😊😊😊😊😊😊😊😊😊😊";
    }
    request(app)
      .put(location)
      .send({
        title: "😊😊😊",
        content: longStr,
        password,
      })
      .expect(400, done);
  });

  it("게시글 수정 시 비밀번호가 일치하지 않는 경우", (done) => {
    request(app)
      .put(location)
      .send({
        title: "😊😊😊",
        content: "😊😊😊😊😊😊😊😊😊",
        password: password + "123",
      })
      .expect(400, done);
  });
});
