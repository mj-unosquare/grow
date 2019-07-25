import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Location } from 'src/locations/locations.entity';

@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  first_name: string;
  @Column()
  surname: string;
  @Column()
  create_on: Date;
  @Column()
  last_login: Date;
  // @OneToMany(type => Location, location => location.account, {
  //   eager: true,
  // })
  // @JoinColumn()
  // locations: Location[];
}
