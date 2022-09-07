const request = require("supertest");
const app = require("../app");

describe("----------이모지 입력 테스트----------", () => {
  const password = "!@RGd352";
  let location = "";
  it("게시글에 이모지 입력", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "😊😊😊",
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
    request(app)
      .get(location)
      .send()
      .expect((res) => {
        console.log(res.body.title);
      })
      .expect(200, done);
  });
});
