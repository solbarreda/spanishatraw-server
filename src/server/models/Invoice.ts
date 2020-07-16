import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { BaseModel } from '@baseClasses';
import { type } from 'os';
import { Service } from './Service';
import { User } from './User';

@Entity()
export class Invoice extends BaseModel {
  @Column({
    type: 'float',
  })
  chargeAmount: number;

  @OneToOne(type => Service)
  @JoinColumn()
  service: Service;

  @OneToOne(type => User, { cascade: true })
  @JoinColumn()
  user: User;
}
