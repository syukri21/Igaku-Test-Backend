import { UsersService } from '../users/users.service';
import { Register } from '../users/dto/register.dto';
import { Login } from '../users/dto/login.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(data: Register): Promise<{
        success: boolean;
        message: string;
    }>;
    login(data: Login): Promise<any>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}
