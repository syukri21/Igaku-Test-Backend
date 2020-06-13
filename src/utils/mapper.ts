import { User } from '../users/entity/user.entity';
import { UserDto } from '../users/dto/user.dto';
import { Login } from '../users/dto/login.dto';

export const toUserDto = (data: User): UserDto => {
  const { id, firstName, lastName, email } = data;

  let userDto: UserDto = {
    id,
    firstName,
    lastName,
    email,
  };

  return userDto;
};

export const toLoginDto = (data: Login): Login => {
  const { email, password } = data;
  const login: Login = {
    email,
    password,
  };

  return login;
};
