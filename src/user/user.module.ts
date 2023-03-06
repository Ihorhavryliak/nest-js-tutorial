import { AppModule } from './../app.module';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { LoggerMiddleware } from 'src/middleware/middleware';


@Module({
  imports: []
})

export class UserModule implements NestModule {
 async configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware, LoggerMiddleware)
    .exclude({path: 'items', method: RequestMethod.POST})
    .forRoutes({path: 'us*r', method: RequestMethod.GET}, {path: 'create', method: RequestMethod.ALL})
  }
}