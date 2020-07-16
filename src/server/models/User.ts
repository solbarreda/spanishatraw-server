import { Column, Entity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseModel } from '@baseClasses';

import { UserType } from './UserType';
import { ContactUs } from './ContactUs';
import { type } from 'os';
import { Testimonial } from './Testimonial';
import { Invoice } from './Invoice';

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

  @OneToMany(type => ContactUs, contactUs => contactUs.user)
  contactUs: ContactUs[];

  @OneToOne(type => Testimonial)
  @JoinColumn()
  testimonial: Testimonial;

  @OneToOne(type => Invoice)
  @JoinColumn()
  invoice: Invoice;
}

// firstName | lastName | age | email | userType_id
