import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from './register.dto';
import { validate } from 'class-validator';

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
      user.hashPassword();
      await this.userRepository.save(user);
      return { message: 'success' };
    }
  }
}
