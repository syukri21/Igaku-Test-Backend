import { IsEmail, IsDefined, Length } from 'class-validator';
import { Entity, Column } from 'typeorm';

@Entity()
export class Login {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @Length(6)
  password: string;
}
