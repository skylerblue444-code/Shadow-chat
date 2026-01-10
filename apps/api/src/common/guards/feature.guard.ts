import { CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";

export class FeatureGuard implements CanActivate {
  constructor(private enabled: boolean) {}

  canActivate(context: ExecutionContext): boolean {
    if (!this.enabled) {
      throw new ForbiddenException("Feature disabled");
    }
    return true;
  }
}