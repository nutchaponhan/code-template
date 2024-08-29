import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from '@usecase/order/create-order.usecase';

@Module({
  imports: [],
  providers: [CreateOrderUseCase],
  exports: [CreateOrderUseCase],
})
export class OrderModule {}
