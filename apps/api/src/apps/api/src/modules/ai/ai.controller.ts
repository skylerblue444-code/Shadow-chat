import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@/common/guards/jwt-auth.guard";
import { FeatureGuard } from "@/common/guards/feature.guard";
import { FEATURES } from "@/common/feature-flags";
import { AiMarketService } from "./ai.market.service";

@Controller("ai")
@UseGuards(JwtAuthGuard, new FeatureGuard(FEATURES.AI))
export class AiController {
  constructor(private readonly marketAI: AiMarketService) {}

  @Post("market-summary")
  getMarketSummary(@Body() body) {
    return this.marketAI.analyzeMarketSnapshot(body);
  }
}