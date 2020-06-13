import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Register } from '../users/dto/register.dto';
import { Login } from '../users/dto/login.dto';
import { validate } from 'class-validator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async register(@Body() body: Register) {
    const result = await this.authService.register(body);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  async login(@Body() login: Login) {
    const data = new Login();
    data.password = login.password;
    data.email = login.email;
    const errors = await validate(data);
    if (errors.length > 0) {
      throw new HttpException('Validation Failed', HttpStatus.BAD_REQUEST);
    } else {
      return await this.authService.login(login);
    }
  }
}
