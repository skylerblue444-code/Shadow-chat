import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  login(username: string) {
    return {
      userId: `user_${username}`,
      token: `mock-token-${Date.now()}`,
    };
  }

  validate(token: string) {
    if (!token?.startsWith("mock-token")) return null;
    return { userId: "user_demo" };
  }
}