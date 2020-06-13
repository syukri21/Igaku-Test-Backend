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
import { Todo } from '../../todos/entity/todo.entity';
import { createPassword } from '../../utils/index';
import { IsEmail, IsDefined } from 'class-validator';

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
    () => Todo,
    todo => todo.user,
  )
  todos: Todo[];
}
