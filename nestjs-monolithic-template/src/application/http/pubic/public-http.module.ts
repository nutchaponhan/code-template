import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserSingUpUseCase } from '@usecase/user/user-signup.usecase';

import { PublicV1Controller } from './v1/public.v1.controller';

@Module({
  imports: [],
  providers: [UserSingUpUseCase],
  controllers: [PublicV1Controller],
})
export class PublicHttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply().forRoutes(PublicV1Controller);
  }
}
