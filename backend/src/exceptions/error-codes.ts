import { HttpStatus } from '@nestjs/common';

export enum ErrorCode {
  UpdateError = 400,
  SaveError = 400,
  IncorrectData = 401,
  Forbidden = 403,
  DeleteForbidden = 403,
  OfferForbidden = 403,
  RaisedForbidden = 403,
  UserNotFound = 404,
  WishNotFound = 404,
  WishesNotFound = 404,
  WishlistNotFound = 404,
  UserAlreadyExists = 409,
}

export const code2message = new Map<ErrorCode, string>([
  [
    ErrorCode.UpdateError,
    'Не удалось обновить данные. Пожалуйста, проверьте предоставленную информацию на наличие ошибок.',
  ],
  [
    ErrorCode.SaveError,
    'Произошла ошибка при сохранении данных. Убедитесь, что все поля заполнены корректно.',
  ],
  [
    ErrorCode.IncorrectData,
    'Неверное имя пользователя или пароль. Пожалуйста, попробуйте снова.',
  ],
  [
    ErrorCode.Forbidden,
    'У вас нет прав для удаления подарка, созданного другим пользователем.',
  ],
  [
    ErrorCode.DeleteForbidden,
    'Вы можете удалять только те элементы, которые создали сами.',
  ],
  [
    ErrorCode.OfferForbidden,
    'Вы не можете жертвовать деньги на свои собственные подарки.',
  ],
  [
    ErrorCode.RaisedForbidden,
    'Введенная сумма поддержки слишком велика или вы выбрали свой подарок.',
  ],
  [
    ErrorCode.UserAlreadyExists,
    'Пользователь с таким именем или электронной почтой уже зарегистрирован. Пожалуйста, используйте другие данные для регистрации.',
  ],
  [
    ErrorCode.UserNotFound,
    'Пользователь не найден. Пожалуйста, убедитесь, что вы ввели правильные данные.',
  ],
  [
    ErrorCode.WishNotFound,
    'Запрашиваемый подарок не найден. Пожалуйста, проверьте, верно ли указан ID подарка.',
  ],
  [
    ErrorCode.WishesNotFound,
    'Подарки не найдены. Пожалуйста, проверьте критерии поиска.',
  ],
  [
    ErrorCode.WishlistNotFound,
    'Список подарков не найден. Пожалуйста, убедитесь, что вы ввели правильный ID списка.',
  ],
]);

export const code2status = new Map<ErrorCode, HttpStatus>([
  [ErrorCode.UpdateError, HttpStatus.BAD_REQUEST],
  [ErrorCode.SaveError, HttpStatus.BAD_REQUEST],
  [ErrorCode.IncorrectData, HttpStatus.UNAUTHORIZED],
  [ErrorCode.Forbidden, HttpStatus.FORBIDDEN],
  [ErrorCode.OfferForbidden, HttpStatus.FORBIDDEN],
  [ErrorCode.DeleteForbidden, HttpStatus.FORBIDDEN],
  [ErrorCode.RaisedForbidden, HttpStatus.FORBIDDEN],
  [ErrorCode.UserAlreadyExists, HttpStatus.CONFLICT],
  [ErrorCode.UserNotFound, HttpStatus.NOT_FOUND],
  [ErrorCode.WishNotFound, HttpStatus.NOT_FOUND],
  [ErrorCode.WishesNotFound, HttpStatus.NOT_FOUND],
  [ErrorCode.WishlistNotFound, HttpStatus.NOT_FOUND],
]);
