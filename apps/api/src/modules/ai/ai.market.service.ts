import { Injectable } from "@nestjs/common";

@Injectable()
export class AiMarketService {
  analyzeMarketSnapshot(snapshot: {
    symbol: string;
    price: number;
    change24h: number;
    volume: number;
  }) {
    let sentiment: "BULLISH" | "BEARISH" | "NEUTRAL" = "NEUTRAL";

    if (snapshot.change24h > 3) sentiment = "BULLISH";
    if (snapshot.change24h < -3) sentiment = "BEARISH";

    return {
      summary: `The market for ${snapshot.symbol} is currently ${sentiment.toLowerCase()}.`,
      explanation: `Price moved ${snapshot.change24h}% in the last 24 hours with notable volume.`,
      sentiment,
      confidence: 0.72,
      timestamp: new Date().toISOString(),
      disclaimer: "Informational only. Not financial advice.",
    };
  }
}