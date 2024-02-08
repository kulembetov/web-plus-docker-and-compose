import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class InvalidDataExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let messages = exceptionResponse['message'] || [];
    if (Array.isArray(messages)) {
      messages = messages.flatMap((error) => 
        Object.values(error.constraints || {})
      );
    } else {
      messages = [messages];
    }

    response.status(status).json({
      statusCode: status,
      error: 'Bad Request',
      messages: messages,
    });
  }
}