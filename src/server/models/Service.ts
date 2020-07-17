import {
  Entity,
  Column,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { AgeRange, Homework } from '@models';
import { BaseModel } from '@baseClasses';

@Entity()
export class Service extends BaseModel {
  @Column({
    type: 'char',
    length: 64,
  })
  name: string;

  @Column({
    type: 'float',
  })
  price: number;

  @Column({
    type: 'text',
  })
  image: string;

  @Column({
    type: 'json',
  })
  schedule: any;

  @ManyToMany(_ => AgeRange, ageRange => ageRange.service)
  @JoinTable()
  ageRanges: AgeRange[];

  @OneToMany(_ => Homework, homework => homework.service)
  homeworks: Homework[];
}
