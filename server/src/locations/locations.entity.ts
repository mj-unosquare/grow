import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;
  @Column()
  user_id: number;
  @Column()
  location_name: string;
  @Column()
  description: string;
  @Column()
  imageurl: string;
}
