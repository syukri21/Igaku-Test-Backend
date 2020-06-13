import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDefined, IsString } from 'class-validator';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  todoId: number;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  task: string;

  @Column()
  status: boolean;
}
