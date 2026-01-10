import { Controller, Get } from "@nestjs/common";

@Controller("admin")
export class AdminController {
  @Get("flags")
  flags() {
    return process.env;
  }
}