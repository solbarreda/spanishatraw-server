import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '@baseClasses';

import { UserType } from './UserType';

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

  @OneToOne(type => UserType)
  @JoinColumn()
  userType: UserType;
}

// firstName | lastName | age | email | userType_id
