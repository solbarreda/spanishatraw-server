import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { AgeRange } from './AgeRange';
import { type } from 'os';
import { Homework } from './Homework';

@Entity()
export class Service {
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

  @ManyToMany(type => AgeRange, ageRange => ageRange.service)
  @JoinTable()
  ageRanges: AgeRange[];

  @OneToOne(type => Homework)
  @JoinColumn()
  homework: Homework;
}
