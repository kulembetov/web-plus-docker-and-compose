import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(clientIp: string): string {
    return `Добро пожаловать! Ваш IP адрес ${clientIp}. Наслаждайтесь нашим сервисом!`;
  }
}