import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '@baseClasses';
import { User } from './User';

@Entity()
export class Testimonial extends BaseModel {
  @Column({
    type: 'text',
  })
  content: string;

  @OneToOne(type => User, { cascade: true })
  @JoinColumn()
  user: User;
}
