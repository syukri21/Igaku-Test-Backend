import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { createHmac } from 'crypto';
import { Todo } from '../todos/todo.entity';
import { createPassword } from '../utils/index';
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsDefined,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined()
  firstName: string;

  @Column()
  @IsDefined()
  lastName: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column()
  @IsDefined()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await createPassword(this.password);
    }
  }

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(
    type => Todo,
    todo => todo.user,
  )
  todos: Todo[];
}
