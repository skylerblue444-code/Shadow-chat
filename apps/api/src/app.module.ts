import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { MessagingModule } from "./messaging/messaging.module";
import { AiModule } from "./ai/ai.module";
import { WalletModule } from "./wallet/wallet.module";
import { ModerationModule } from "./moderation/moderation.module";
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UsersModule,
    MessagingModule,
    AiModule,
    WalletModule,
    ModerationModule,
    AdminModule
  ]
})
export class AppModule {}