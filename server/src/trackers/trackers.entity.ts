import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tracker')
export class Tracker {
  @PrimaryGeneratedColumn()
  tracker_id: number;
  @Column()
  tracker_name: string;
  @Column()
  tracker_type: string;
}
