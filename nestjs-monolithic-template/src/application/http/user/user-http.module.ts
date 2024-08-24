import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [],
  providers: [],
  controllers: [],
})
export class UserHttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply().forRoutes();
  }
}
