import { Entity, Column } from 'typeorm';
import { BaseModel } from '@baseClasses';

@Entity()
export class Features extends BaseModel {
  @Column({
    type: 'char',
    length: 16,
  })
  name: String;

  @Column({
    type: 'text',
  })
  description: String;
}
