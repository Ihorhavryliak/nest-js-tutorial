import { FastifyRequest, FastifyReply } from 'fastify';
import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class LoggerMiddleware {
  use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: (error?: any) => void) {
    console.log('Request')
    next();
  }
}