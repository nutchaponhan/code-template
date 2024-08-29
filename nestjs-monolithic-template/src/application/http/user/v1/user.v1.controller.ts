import { match } from 'oxide.ts';

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { CreateOrderUseCase } from '@usecase/order/create-order.usecase';
import { GetProductListUseCase } from '@usecase/product/get-product-list.usecase';

import { CreateOrderDto } from '@core/domain/order/dto/create-order.dto';

@Controller({
  path: 'user',
  version: '1',
})
export class UserV1Controller {
  constructor(
    private getProductListUseCase: GetProductListUseCase,
    private createOrderUseCase: CreateOrderUseCase,
  ) {}

  @Get('products')
  async getProductList() {
    const result = await this.getProductListUseCase.exec();
    return match(result, {
      Ok(products) {
        return {
          data: products,
        };
      },
      Err(msg) {
        throw new BadRequestException(msg);
      },
    });
  }

  @Post('orders')
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    const result = await this.createOrderUseCase.exec(createOrderDto);
    return match(result, {
      Ok(newOrder) {
        return {
          data: newOrder,
        };
      },
      Err(msg) {
        throw new BadRequestException(msg);
      },
    });
  }
}
