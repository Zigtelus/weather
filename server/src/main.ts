import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

const PORT = process.env.PORT || 3030;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors();
  app.use('/uploads', express.static('./uploads'));
  await app.listen(PORT, () => {
    const address = app.getHttpServer().address();
    const protocol = 'http'; // Предполагаемый протокол, если не используется HTTPS
    if (typeof address === 'string') {
      console.log(`Server is listening on ${address}`);
    } else {
      console.log(`Server is listening at ${protocol}://127.0.0.1:${address.port}`);
    }
  });
}
bootstrap();
