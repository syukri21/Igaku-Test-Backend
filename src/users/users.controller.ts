import { Controller, Post, Body } from '@nestjs/common';
import { Register } from './register.dto';
import { UsersService } from './users.service';
import { Login } from './login.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  register(@Body() body: Register) {
    return this.usersService.createOne(body);
  }

  @Post('login')
  login(@Body() login: Login) {}
}
