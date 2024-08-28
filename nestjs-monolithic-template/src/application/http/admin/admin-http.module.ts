import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AddProductUseCase } from '@usecase/product/add-product.usecase';
import { GetProductListUseCase } from '@usecase/product/get-product-list.usecase';

import { AdminV1Controller } from './v1/admin.v1.controller';

@Module({
  imports: [],
  providers: [AddProductUseCase, GetProductListUseCase],
  controllers: [AdminV1Controller],
})
export class AdminHttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply().forRoutes(AdminV1Controller);
  }
}
