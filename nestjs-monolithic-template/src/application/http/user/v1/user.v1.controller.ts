import { match } from 'oxide.ts';

import { BadRequestException, Controller, Get } from '@nestjs/common';
import { GetProductListUseCase } from '@usecase/product/get-product-list.usecase';

@Controller({
  path: 'user',
  version: '1',
})
export class UserV1Controller {
  constructor(private getProductListUseCase: GetProductListUseCase) {}

  @Get('products')
  async getProductList() {
    const result = await this.getProductListUseCase.exec();
    return match(result, {
      Ok(products) {
        return {
          data: products,
        };
      },
      Err() {
        throw new BadRequestException();
      },
    });
  }
}
