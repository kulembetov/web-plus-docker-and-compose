## URLs
- **Frontend URL**: [https://kkulembetov.kpd.nomoredomainswork.ru](https://kulembetov.kpd.nomoredomainswork.ru)
- **Backend URL**: [https://api.kulembetov.kpd.nomoredomainswork.ru](https://api.kulembetov.kpd.nomoredomainswork.ru)
- **IP Address**: 158.160.40.178

### Докеризация приложения
- К домену из README.md можно обратиться по http и по https.
- Сертификат выпущен и активен. Это можно проверить по ссылке: https://www.sslshopper.com/ssl-checker.html.
- Бэкенд расположен на поддомене api домена фронтенда.
- JWT-секрет и параметры подключения БД бэкенда загружаются из переменных окружения.
- Бэкенд докеризирован:
  - Создан Dockerfile в папке бэкенда.
  - В Dockerfile указан базовый образ node:16-alpine.
  - Зависимости проекта корректно кешируются.
  - Описаны два этапа: сборка и запуск.
  - В финальном образе не должно быть исходников, а также dev-зависимостей.
- Фронтенд докеризирован:
  - Создан Dockerfile в папке фронтенда.
  - В Dockerfile используются базовые образы: node:16-alpine и nginx:latest.
  - Описаны два этапа сборки: сборка и запуск nginx.
  - В финальном образе не должно быть исходников.
- Корректно описан файл docker-compose:
  - Описаны три сервиса: backend, frontend, database.
  - Для каждого сервиса указаны имя контейнера и директория сборки.
  - Значения переменных окружения, которые использует сервис, загружаются из внешнего файла.
  - Настроены связи между сервисами.
  - Для каждого из сервисов указана политика перезапуска.
  - env-файлы не должны быть добавлены в репозиторий проекта и должны быть указаны в файле .gitignore.
- После выполнения команды docker-compose up сервис запускается без ошибок.
- Задеплоенный фронтенд корректно взаимодействует с бэкендом на сервере, все запросы выполняются.
- Корректно настроена переадресация в nginx для React-приложения.

### Установка на сервер

- Подключитесь к вашему серверу по SSH:
```
ssh user@server_ip
```

- Склонируйте репозиторий на вашем сервере:
```
git clone https://github.com/your-username/your-repo.git

```

- Перейдите в директорию проекта:
```
cd your-repo
```

- Установите Docker и Docker Compose, если их ещё нет на вашем сервере.
```
sudo apt install -y docker-compose
```
```
sudo yum install -y docker-ce
```

- Запустите службу Docker и настройте ее на автозапуск:
```
sudo systemctl start docker
sudo systemctl enable docker
```

- Создайте файл .env с необходимыми переменными окружения для вашего приложения.

- Соберите и запустите Docker-контейнеры с помощью Docker Compose:

```
docker-compose up -d
```

- После установки приложения на сервере вы можете запускать и останавливать его по мере необходимости:

```
docker-compose up -d
```

- Для остановки приложения
```
docker-compose down
```

Не забудьте настроить переменные окружения и конфигурации в файлах .env и docker-compose.yml в соответствии с вашей конкретной установкой.