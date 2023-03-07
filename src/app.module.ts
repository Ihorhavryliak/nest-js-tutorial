import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginInterceptor } from './interceptor/login.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoginInterceptor
    }
  ],
})
export class AppModule {}