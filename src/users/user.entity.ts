import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { createHmac } from 'crypto';
import { Todo } from '../todos/todo.entity';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false })
  public password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = createHmac('sha256', this.password).digest('hex');
    }
  }

  @OneToMany(
    type => Todo,
    todo => todo.user,
  )
  todos: Todo[];
}
