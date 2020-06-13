import { IsDefined } from 'class-validator';

export class CreateTodo {
  @IsDefined()
  task: string;
}
