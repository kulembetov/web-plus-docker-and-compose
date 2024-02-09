import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(clientIp: string): string {
    if (!clientIp) {
      throw new Error('IP адрес не найден');
    }

    const formattedIp = clientIp.startsWith('::ffff:')
      ? clientIp.replace('::ffff:', '')
      : clientIp;

    const messages = [
      `Ваш IP адрес ${formattedIp}`,
      `https://kulembetov.kpd.nomoredomainswork.ru`,
      'Наслаждайтесь нашим сервисом!',
    ];

    console.log(messages.join('\n'));

    console.log(`Ваш IP адрес ${clientIp}`);
    console.log(`https://kulembetov.kpd.nomoredomainswork.ru`);
    console.log('Наслаждайтесь нашим сервисом!');

    return `Добро пожаловать! Ваш IP адрес ${formattedIp}. Наслаждайтесь нашим сервисом!`;
  }
}
