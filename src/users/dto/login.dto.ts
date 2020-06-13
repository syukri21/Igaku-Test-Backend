import { IsEmail, IsDefined } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class Login {
  @IsDefined()
  @IsEmail()
  email: string;


  @IsDefined()
  password: string;
}
