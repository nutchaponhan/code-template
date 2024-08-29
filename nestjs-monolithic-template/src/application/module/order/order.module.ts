import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from '@usecase/order/create-order.usecase';
import { EditOrderUseCase } from '@usecase/order/edit-order.usecase';

@Module({
  imports: [],
  providers: [CreateOrderUseCase, EditOrderUseCase],
  exports: [CreateOrderUseCase, EditOrderUseCase],
})
export class OrderModule {}
