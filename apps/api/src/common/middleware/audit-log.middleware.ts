import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class AuditLogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: any) {
    res.on("finish", () => {
      console.log(
        `[AUDIT] ${req.method} ${req.originalUrl} ${res.statusCode}`
      );
    });
    next();
  }
}