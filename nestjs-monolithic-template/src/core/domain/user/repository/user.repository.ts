import { UserEntity } from '../entity/user.entity';

export abstract class IUserRepository {
  abstract save<T>(data: T): Promise<T>;
  abstract findUser({ email }: { email: string }): Promise<UserEntity>;
}
