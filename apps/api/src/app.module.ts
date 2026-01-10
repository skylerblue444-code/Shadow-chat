import { Module } from "@nestjs/common";
import { FEATURES } from "./common/feature-flags";

const modules = [];

if (FEATURES.ADMIN) {
  const { AdminModule } = require("./modules/admin/admin.module");
  modules.push(AdminModule);
}

@Module({
  imports: [...modules],
})
export class AppModule {}