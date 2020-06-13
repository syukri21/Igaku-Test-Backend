import { Controller, Post, Body } from '@nestjs/common';
import { Register } from './dto/register.dto';
import { UsersService } from './users.service';
import { Login } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
