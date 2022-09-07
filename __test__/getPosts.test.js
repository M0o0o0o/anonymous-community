const request = require("supertest");
const app = require("../app");

describe("----------여러 게시글 조회 조회----------", () => {
  it("여러 게시글 조회", (done) => {
    request(app).get("/board").query({ page: 1 }).expect(200, done);
  });

  it("query string을 넘기지 않은 경우", (done) => {
    request(app).get("/board").expect(400, done);
  });
});
