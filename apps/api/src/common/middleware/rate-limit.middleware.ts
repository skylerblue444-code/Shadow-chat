import { Injectable, NestMiddleware } from "@nestjs/common";
import rateLimit from "express-rate-limit";

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  use = rateLimit({
    windowMs: 60_000,
    max: 100,
  });
}