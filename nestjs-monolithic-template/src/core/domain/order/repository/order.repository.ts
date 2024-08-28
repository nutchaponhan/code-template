// import { OrderEntity } from '../entity/order.entity';

export abstract class IOrderRepository {
  abstract save<T>(data: T): Promise<T>;
}
