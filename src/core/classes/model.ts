import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  SaveOptions,
} from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ type: 'timestamptz', nullable: false })
  private created: string = new Date().toISOString();

  @Column({ type: 'timestamptz', nullable: false })
  private updated: string;

  save = (options?: SaveOptions): Promise<this> => {
    this.updated = new Date().toISOString();
    return super.save(options);
  };
}
