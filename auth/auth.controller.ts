import { Controller, Post, Body, Get, Headers } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("login")
  login(@Body("username") username: string) {
    return this.auth.login(username);
  }

  @Get("me")
  me(@Headers("authorization") token: string) {
    return this.auth.validate(token);
  }
}