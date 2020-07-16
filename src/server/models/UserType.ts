import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseModel } from '@baseClasses';

@Entity()
export class UserType extends BaseModel {
  //upper camell case: clases
  //camell case: resto de variables

  @Column({
    type: 'char',
    length: 16,
  })
  slug: string;

  @Column({
    type: 'char', //tipo de dato en la bd
    length: 64,
  })
  type: string; //representacion como obj en el server
}
