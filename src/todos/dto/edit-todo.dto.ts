import { IsDefined } from 'class-validator';

export class EditDto {
  @IsDefined()
  id: number;

  task: string;
  status: boolean;
}
