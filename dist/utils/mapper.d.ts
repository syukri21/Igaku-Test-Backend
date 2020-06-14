import { User } from '../users/entity/user.entity';
import { UserDto } from '../users/dto/user.dto';
import { Login } from '../users/dto/login.dto';
export declare const toUserDto: (data: User) => UserDto;
export declare const toLoginDto: (data: Login) => Login;
