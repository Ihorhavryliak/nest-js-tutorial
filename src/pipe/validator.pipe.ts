import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';



@Injectable()
export class ValidationPipeString implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const length = value.length;
    if(length === 1) {
      throw new BadRequestException('Validation failed')
    }
    return value;
  }
}