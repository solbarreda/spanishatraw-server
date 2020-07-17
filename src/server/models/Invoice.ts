import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';

import { BaseModel } from '@baseClasses';
import { Service, User } from '@models';

@Entity()
export class Invoice extends BaseModel {
  @Column({
    type: 'float',
  })
  chargeAmount: number;

  @OneToOne(_ => Service)
  @JoinColumn()
  service: Service;

  @OneToOne(_ => User, { cascade: true })
  @JoinColumn()
  user: User;
}
