import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { BaseModel } from '@baseClasses';

@Entity()
export class Homework extends BaseModel {
  @Column({
    type: 'text',
  })
  file: string;

  @Column({
    type: 'text',
    length: 128,
  })
  description: string;

  @Column({
    type: 'char',
    length: 64,
  })
  name: string;
}
