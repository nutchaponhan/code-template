import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUserRepository } from '@core/domain/user/repository/user.repository';

import { User } from './entity';
import { UserRepository } from './repository';

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
  ],
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
})
export class TypeOrmPersistenceModule {}
