import { Controller, Post, Body } from '@nestjs/common';
import { Register } from './register.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  register(@Body() body: Register) {
    return this.usersService.createOne(body);
  }
}
