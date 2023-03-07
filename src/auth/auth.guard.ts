import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean  {
    
    const role = this.reflector.get<string[]>('roles', context.getHandler());

    if(!role){
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if(user.role.includes('admin')){
      return true
    }
    return false;
  
  }

}