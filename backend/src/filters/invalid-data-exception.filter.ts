import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class InvalidDataExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let validationMessages: string[] = [];

    if (Array.isArray(exceptionResponse['message'])) {
      validationMessages = exceptionResponse['message'];
    } else if (typeof exceptionResponse['message'] === 'string') {
      validationMessages = [exceptionResponse['message']];
    } else {
      validationMessages = ['An unexpected validation error occurred.'];
    }

    response.status(status).json({
      statusCode: status,
      error: 'Bad Request',
      messages: validationMessages,
    });
  }
}