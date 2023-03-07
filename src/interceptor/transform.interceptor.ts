import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, map, Observable, of, throwError } from "rxjs";




export interface Response<T> {
  data: T
}


@Injectable()

export class CacheInterceptor<T> implements NestInterceptor<T, Response<T>>{

   intercept(context: ExecutionContext, next: CallHandler): Observable<any>  {
   
    const isCached = true;

    if(isCached){
      return of(['name'])
    }

    return next.handle();
  }

}