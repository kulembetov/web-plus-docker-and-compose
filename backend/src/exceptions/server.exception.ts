import { HttpException, HttpStatus } from '@nestjs/common';
import { code2message, code2status, ErrorCode } from './error-codes';

export class ServerException extends HttpException {
  public code: ErrorCode;

  constructor(code: ErrorCode) {
    const defaultMessage =
      'На сервере произошла ошибка. Пожалуйста, попробуйте повторить ваш запрос позже.';
    const message = code2message.get(code) || defaultMessage;
    const status = code2status.get(code) || HttpStatus.INTERNAL_SERVER_ERROR;

    super(message, status);
    this.code = code;
  }
}
