import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from '@core/domain/user/entity/user.entity';

@Entity('users')
export class User implements UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'firstname', nullable: false, type: 'varchar' })
  firstname: string;

  @Column({ name: 'lastname', nullable: false, type: 'varchar' })
  lastname: string;

  @Column({ name: 'password', nullable: false, type: 'varchar' })
  password: string;

  @Column({ name: 'email', nullable: true, type: 'varchar' })
  email?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
