import { Entity, Column, ManyToMany } from 'typeorm';
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

  @ManyToMany(_ => Service, service => service.ageRanges)
  service: Service[];
}
