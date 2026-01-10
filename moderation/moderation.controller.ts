import { Controller, Get } from "@nestjs/common";

@Controller("moderation")
export class ModerationController {
  @Get("status")
  status() {
    return { moderation: "active" };
  }
}