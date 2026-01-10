import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { SAFETY } from "../safety.config";

export class ReadOnlyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    if (SAFETY.READ_ONLY) {
      throw new ForbiddenException(
        "Platform is temporarily in read-only mode"
      );
    }
    return true;
  }
}