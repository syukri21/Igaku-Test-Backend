import { AuthService } from './auth.service';
import { Register } from '../users/dto/register.dto';
import { Login } from '../users/dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: Register): Promise<{
        success: boolean;
        message: string;
    }>;
    login(login: Login): Promise<any>;
}
