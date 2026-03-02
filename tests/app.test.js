const request = require("supertest");
const app = require("../index");

describe("Basic Test", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hello/);
  });
});
