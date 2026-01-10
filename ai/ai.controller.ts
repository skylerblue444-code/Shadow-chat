import { Controller, Get } from "@nestjs/common";
import { FeatureFlags } from "../config/feature-flags";

@Controller("ai")
export class AiController {
  @Get("status")
  status() {
    return FeatureFlags.AI
      ? { ai: "enabled" }
      : { ai: "disabled" };
  }
}