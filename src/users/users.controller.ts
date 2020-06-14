import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Register } from './dto/register.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('jwt')
  getCurrentUser(@Request() req) {
    return req.user;
  }
}
