import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GetProductListUseCase } from '@usecase/product/get-product-list.usecase';

import { UserV1Controller } from './v1/user.v1.controller';

@Module({
  imports: [],
  providers: [GetProductListUseCase],
  controllers: [UserV1Controller],
})
export class UserHttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply().forRoutes();
  }
}
