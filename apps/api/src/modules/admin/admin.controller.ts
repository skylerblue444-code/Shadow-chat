import { Controller, Get, UseGuards, Req } from "@nestjs/common";
import { JwtAuthGuard } from "@/common/guards/jwt-auth.guard";
import { AdminGuard } from "@/common/guards/admin.guard";
import { FeatureGuard } from "@/common/guards/feature.guard";
import { FEATURES } from "@/common/feature-flags";
import { AdminService } from "./admin.service";

@Controller("admin")
@UseGuards(
  JwtAuthGuard,
  new FeatureGuard(FEATURES.ADMIN),
  AdminGuard
)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get("status")
  getAdminStatus(@Req() req) {
    this.adminService.auditLog(
      "ADMIN_STATUS_CHECK",
      req.user.id
    );

    return this.adminService.getStatus();
  }
}