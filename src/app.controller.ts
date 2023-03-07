import { CreateUserDto } from './dto/user.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RoleGuard } from './auth/auth.guard';
import { LoginInterceptor } from './interceptor/login.interceptor';
import { CacheInterceptor } from './interceptor/transform.interceptor';


@Controller()
export class AppController {

 
  @Post()
  @UseInterceptors(CacheInterceptor)
  async authUser(@Body() userDto: CreateUserDto) {
   
  }

}
