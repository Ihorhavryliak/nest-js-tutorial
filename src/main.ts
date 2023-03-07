import { ValidationPipeString } from './pipe/validator.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleGuard } from './auth/auth.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false});
  await app.listen(5000, ()=> console.log(`listen on 5000`));
}
bootstrap();
