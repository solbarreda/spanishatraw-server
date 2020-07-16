import { Entity, Column, OneToOne, ManyToOne } from 'typeorm';
import { BaseModel } from '@baseClasses';
import { type } from 'os';
import { User } from './User';

@Entity()
export class ContactUs extends BaseModel {
  @Column({
    type: 'char',
    length: 128,
  })
  subject: string;

  @Column({
    type: 'text',
  })
  description: string;

  @ManyToOne(type => User, user => user.contactUs, { cascade: true })
  user: User;
}

// user
// name | id | lastName
// Sol  | 1  | Barreda

// contactUs
// id | subject | description |  user_id
// 1  | Pregunta| des         | 1
// 2  | Pregunt | des         | 1
// 3  | Pregun  | des         | 1

// user.contactUs => [pregunta1, pregunta2]
