import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private jwt: JwtService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers.authorization;
    if (!auth) return false;

    const token = auth.split(" ")[1];
    try {
      const payload = this.jwt.verify(token);
      req.user = payload;
      return true;
    } catch {
      return false;
    }
  }
}