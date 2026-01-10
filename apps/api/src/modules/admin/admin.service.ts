import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
  getStatus() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
    };
  }

  auditLog(action: string, actorId: string, targetId?: string) {
    console.log("[ADMIN AUDIT]", {
      action,
      actorId,
      targetId,
      time: new Date().toISOString(),
    });
  }
}