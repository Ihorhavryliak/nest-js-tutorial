import { CreateUserDto } from './dto/user.dto';
import { BadRequestException, Body, Controller, Get, Header, HttpCode, HttpException, HttpStatus, Param, Post, Redirect } from '@nestjs/common';
import { ForbiddenException } from './exeption/forbidden.exaption';


@Controller()
export class AppController {

  @Get()
  async getHello() {
    throw new BadRequestException('Something bad', {cause: new Error(), description: 'Some Error'})
  }

 

}
