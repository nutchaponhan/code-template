import { NestFactory } from '@nestjs/core';

import config from '@infra/configuration/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config().app.port;
  await app.listen(port);
}

bootstrap();
