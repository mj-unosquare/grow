import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('plant')
export class Plant {
  @PrimaryGeneratedColumn()
  plant_id: number;
  @Column()
  location_id: number;
  @Column()
  plant_name: string;
  @Column()
  description: string;
  @Column()
  imageurl: string;
}
