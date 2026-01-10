import { CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user || user.role !== "ADMIN") {
      throw new ForbiddenException("Admin access only");
    }

    return true;
  }
}