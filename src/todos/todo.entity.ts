import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  todoId: number;

  @Column()
  task: string;

  @Column()
  status: boolean;
}
