import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppHealthController } from './v1/app-health.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [AppHealthController],
})
export class HealthHttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply().forRoutes(AppHealthController);
  }
}
