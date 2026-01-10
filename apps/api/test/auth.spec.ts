import request from "supertest";
import { app } from "../src/main";

describe("Auth", () => {
  it("registers user", async () => {
    await request(app.getHttpServer())
      .post("/auth/register")
      .send({ email: "test@test.com", password: "pass123" })
      .expect(201);
  });
});