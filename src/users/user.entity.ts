import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { createHmac } from 'crypto';
import { Todo } from '../todos/todo.entity';
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

  @Column()
  @IsEmail()
  email: string;

  @Column({ select: false })
  @IsDefined()
  private password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = createHmac('sha256', this.password).digest('hex');
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
