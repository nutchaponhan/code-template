import { In, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from '@core/domain/product/entity/product.entity';
import { IProductRepository } from '@core/domain/product/repository/product.repository';

import { Product } from '../entity';

@Injectable()
export class ProductRepository
  extends Repository<Product>
  implements IProductRepository
{
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findAllProduct({ id }: { id: number[] }): Promise<ProductEntity[]> {
    const products = await this.repository.find({ where: { id: In(id) } });
    return products;
  }
}
