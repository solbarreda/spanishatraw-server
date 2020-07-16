import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BaseModel } from '@baseClasses';
import { Service } from './Service';

@Entity()
export class AgeRange extends BaseModel {
  @Column({
    type: 'int',
  })
  min: number;

  @Column({
    type: 'int',
  })
  max: number;

  @ManyToMany(type => Service, service => service.ageRanges)
  service: Service[];
}
