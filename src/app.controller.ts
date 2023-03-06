import { CreateUserDto } from './dto/user.dto';
import { BadRequestException, Body, Controller, Get, Header, HttpCode, HttpException, HttpStatus, Param, Post, Redirect, UsePipes, ValidationPipe, ParseBoolPipe, ParseIntPipe } from '@nestjs/common';
import { ForbiddenException } from './exeption/forbidden.exaption';
import { ValidationPipeString } from './pipe/validator.pipe';


@Controller()
export class AppController {

  @Get(':id')
  async getHello(@Param('id', ParseIntPipe) id: number) {
    return 'Tile 1'
  }

 

}

/* ValidationPipe
ParseIntPipe
ParseFloatPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
ParseEnumPipe
DefaultValuePipe
ParseFilePipe */