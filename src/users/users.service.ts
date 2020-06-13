import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from './dto/register.dto';
import { validate } from 'class-validator';
import { UserDto } from './dto/user.dto';
import { comparePasswords } from '../utils/index';
import { toUserDto } from '../utils/mapper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createOne(body: Register) {
    const user = this.userRepository.create(body);
    const errors = await validate(user);
    if (errors.length > 0) {
      throw new Error(`Validation failed!`);
    } else {
      await this.userRepository.save(user);
      return { message: 'success' };
    }
  }

  async findByLogin(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ email }: any): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
