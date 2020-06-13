import { Entity } from 'typeorm';
import { IsDefined, IsEmail, Length } from 'class-validator';

@Entity()
export class Register {
  @IsDefined()
  firstName: string;

  @IsDefined()
  lastName: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsDefined()
  @Length(6)
  password: string;
}
