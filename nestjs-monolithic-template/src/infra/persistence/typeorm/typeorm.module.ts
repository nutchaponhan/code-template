import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUserRepository } from '@core/domain/user/repository/user.repository';

import { User } from './entity';
import { UserRepository } from './repository';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get('database');
        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.name,
          entities: [User],
          synchronize: true,
        };
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
  exports: [IUserRepository],
})
export class TypeOrmPersistenceModule {}
