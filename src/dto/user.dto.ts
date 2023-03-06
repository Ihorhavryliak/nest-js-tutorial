import {IsInt, IsString} from 'class-validator'

export class CreateUserDto {

  @IsString()
  name: string;
  @IsString()
  password: string;
  @IsInt()
  age: number;
}