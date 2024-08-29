import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { OrderEntity } from '@core/domain/order/entity/order.entity';
import { IOrderRepository } from '@core/domain/order/repository/order.repository';

import { Order } from '../entity';

@Injectable()
export class OrderRepository
  extends Repository<Order>
  implements IOrderRepository
{
  constructor(
    @InjectRepository(Order)
    private repository: Repository<Order>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findOrder(query, relations): Promise<OrderEntity> {
    return await this.repository.findOne({
      where: { id: query.id },
      relations: { user: relations.user, products: relations.products },
    });
  }
}
