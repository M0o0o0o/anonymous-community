const request = require("supertest");
const app = require("../app");

describe("----------게시글 등록----------", () => {
  const password = "!@RGd352";
  it("정상 등록", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: "게시글 내용",
        password,
      })
      .expect(201, done);
  });

  it("정상 등록 2", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: "게시글 내용",
        password,
        nickname: "글쓴이",
      })
      .expect(201, done);
  });

  it("제목을 입력하지 않은 경우", (done) => {
    request(app)
      .post("/board")
      .send({
        content: "게시글 내용",
        password,
        nickname: "글쓴이",
      })
      .expect(400, done);
  });

  it("제목을 20자 초과입력한 경우", (done) => {
    request(app)
      .post("/board")
      .send({
        title:
          "게시글 제목게시글 제목게시글 제목게시글 제목게시글 제목게시글 제목게시글 제목",
        content: "게시글 내용",
        password,
        nickname: "글쓴이",
      })
      .expect(400, done);
  });

  it("내용을 입력하지 않은 경우", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        password,
        nickname: "글쓴이",
      })
      .expect(400, done);
  });

  it("내용에 200자 초과 입력된 경우", (done) => {
    let longStr = "";
    for (let i = 0; i < 30; i++) {
      longStr += "fake data fake data";
    }

    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: longStr,
        password,
        nickname: "글쓴이",
      })
      .expect(400, done);
  });

  it("비밀번호가 입력되지 않은 경우", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: "테스트",
        nickname: "글쓴이",
      })
      .expect(400, done);
  });

  it("비밀번호 룰을 지키지 않은 경우", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: "테스트",
        nickname: "글쓴이",
        password: "123AAss",
      })
      .expect(400, done);
  });

  it("닉네임에 20자 초과 입력한 경우", (done) => {
    request(app)
      .post("/board")
      .send({
        title: "게시글 제목",
        content: "테스트",
        nickname: "글쓴이글쓴이글쓴이글쓴이글쓴이글쓴이글쓴이글쓴이글쓴이",
        password: "12!@#3AAss",
      })
      .expect(400, done);
  });

  it("여러 필드의 룰을 동시에 어긴 경우 (title, content)", (done) => {
    request(app)
      .post("/board")
      .send({
        nickname: "글쓴이",
        password: "12!@#3AAss",
      })
      .expect(400, done);
  });
});
