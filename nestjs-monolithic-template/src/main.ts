import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import config from '@infra/configuration/config';

import { AppModule } from './app.module';

const appConfig = config().app;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.setGlobalPrefix(appConfig.prefix);

  await app.listen(appConfig.port);
}

bootstrap();
