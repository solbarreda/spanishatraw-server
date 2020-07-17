import { Entity, Column } from 'typeorm';
import { BaseModel } from '@baseClasses';

@Entity()
export class Features extends BaseModel {
  @Column({
    type: 'char',
    length: 64,
  })
  name: String;

  @Column({
    type: 'text',
  })
  description: String;
}
