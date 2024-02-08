import { ArgumentsHost, Catch, ExceptionFilter, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class InvalidDataExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const exceptionResponse = exception.getResponse();
    const validationMessages = exceptionResponse['message'] || [];

    response.status(status).json({
      message: validationMessages.length ? validationMessages : 'Не удалось обновить данные. Пожалуйста, проверьте предоставленную информацию на наличие ошибок.',
      status: status,
    });
  }
}