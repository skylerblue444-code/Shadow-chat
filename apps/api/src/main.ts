import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { apiRateLimit } from "./common/middleware/rate-limit";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: "*" });
  app.use(apiRateLimit);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();