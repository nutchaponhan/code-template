import { EntityWithIdAndTimeStamp } from '@core/domain/base/base.entity';

export class UserEntity extends EntityWithIdAndTimeStamp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
