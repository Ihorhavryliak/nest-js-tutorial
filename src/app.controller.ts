import { CreateUserDto } from './dto/user.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RoleGuard } from './auth/auth.guard';

@Controller()
export class AppController {

 
  @Post()
  @UseGuards(RoleGuard)
  async authUser(@Body() userDto: CreateUserDto) {
    return 'User one'
  }

}
