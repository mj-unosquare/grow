import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('plant_record')
export class Record {
  @PrimaryGeneratedColumn()
  plant_record_id: number;
  @Column()
  plant_id: number;
  @Column()
  tracker_id: number;
  @Column()
  record_date: Date;
  @Column()
  record_value: string;
}
