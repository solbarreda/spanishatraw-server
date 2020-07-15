import { Column, Entity } from 'typeorm';
import { BaseModel } from '@baseClasses';

// Database entity - TABLE
@Entity()
export class User extends BaseModel {
  @Column({
    type: 'varchar',
    length: 64,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  lastName: string;

  @Column({
    type: 'int',
  })
  age: number;

  @Column({
    type: 'char',
    length: 64,
    unique: true,
  })
  email: string;
}
