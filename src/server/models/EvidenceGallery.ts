import { Entity, Column } from 'typeorm';
import { BaseModel } from '@baseClasses';

@Entity()
export class EvidenceGallery extends BaseModel {
  @Column({
    type: 'text',
  })
  image: String;

  @Column({
    type: 'text',
  })
  description: String;

  @Column({
    type: 'char',
    length: 16,
  })
  name: String;
}
