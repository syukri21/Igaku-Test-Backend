import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { Register } from './dto/register.dto';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createOne(body: Register): Promise<{
        message: string;
    }>;
    findByLogin(email: string, password: string): Promise<UserDto>;
    findByPayload({ email }: any): Promise<User>;
}
