import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from "@nestjs/common";
import { catchError, map, Observable, of, throwError, timeout, TimeoutError } from "rxjs";




export interface Response<T> {
  data: T
}


@Injectable()

export class TimeoutInterceptor<T> implements NestInterceptor<T, Response<T>>{

   intercept(context: ExecutionContext, next: CallHandler): Observable<any>  {
   
    
    return next.handle().pipe(
      timeout(5000),
      catchError(err =>{
        if(err instanceof TimeoutError){
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err)
      })
    )


  }

}