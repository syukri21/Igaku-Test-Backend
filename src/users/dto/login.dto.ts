import { IsEmail, IsDefined, Length } from 'class-validator';

export class Login {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @Length(6)
  password: string;
}
