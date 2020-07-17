import { Entity, Column, JoinColumn, OneToMany } from 'typeorm';
import { BaseModel } from '@baseClasses';
import { Service } from '@models';

@Entity()
export class Homework extends BaseModel {
  @Column({
    type: 'char',
    length: 128,
  })
  file: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'char',
    length: 64,
  })
  name: string;

  @OneToMany(_ => Service, service => service.homeworks, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  service: Service;
}
