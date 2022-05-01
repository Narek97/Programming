import {
    CanActivate,
    ExecutionContext, Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

// login chexat usernerin vorosh hardumnerich zrkelu hamar, vor hardumy vor uzenq
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jstService: JwtService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];

      if (bearer !== "Bearer" || !token) {
        throw new UnauthorizedException({ message: "user is not authorized" });
      }

      const user = this.jstService.verify(token);
      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException({ message: "user is not authorized" });
    }
  }
}
