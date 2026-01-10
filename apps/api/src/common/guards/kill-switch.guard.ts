import {
  CanActivate,
  ExecutionContext,
  ServiceUnavailableException,
} from "@nestjs/common";
import { SAFETY } from "../safety.config";

export class KillSwitchGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    if (SAFETY.KILL_SWITCH) {
      throw new ServiceUnavailableException(
        "Service temporarily unavailable"
      );
    }
    return true;
  }
}