import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { join } from 'path';
import * as cors from 'cors';

const env = process.env.NODE_ENV || 'development';
config({
  path: join(__dirname, `../.env.${env}`),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // Esto habilita CORS de manera global en tu aplicación
  await app.listen(3000);
}
bootstrap();
