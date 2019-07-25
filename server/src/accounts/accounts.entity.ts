import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
