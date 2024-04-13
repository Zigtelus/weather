# Используем базовый образ node:alpine
FROM node:20.5.0

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /client

# Копируем файлы проекта (package.json и package-lock.json)
COPY package*.json .

RUN npm install -g npm@10.5.1

# Устанавливаем зависимости проекта
RUN npm install

# Копируем все файлы проекта внутрь контейнера
COPY . .

# Указываем порт, на котором будет работать приложение
EXPOSE 8080

# Указываем команду для запуска проекта
CMD ["npm", "start"]
