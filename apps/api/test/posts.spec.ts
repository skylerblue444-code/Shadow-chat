import request from "supertest";
import { app } from "../src/main";

describe("Posts", () => {
  it("gets posts", async () => {
    await request(app.getHttpServer())
      .get("/posts")
      .expect(200);
  });
});