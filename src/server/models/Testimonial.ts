import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseModel } from '@baseClasses';
import { User } from './User';

@Entity()
export class Testimonial extends BaseModel {
  @Column({
    type: 'text',
  })
  content: string;

  @OneToOne(_ => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
