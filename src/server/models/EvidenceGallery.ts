import { Entity, Column } from 'typeorm';
import { BaseModel } from '@baseClasses';

@Entity()
export class EvidenceGallery extends BaseModel {
  @Column({
    type: 'char',
    length: 128,
  })
  image: String;

  @Column({
    type: 'text',
  })
  description: String;

  @Column({
    type: 'char',
    length: 64,
  })
  name: String;
}
