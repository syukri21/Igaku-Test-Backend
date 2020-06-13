import { User } from '../users/user.entity';
import { UserDto } from '../users/dto/user.dto';

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
