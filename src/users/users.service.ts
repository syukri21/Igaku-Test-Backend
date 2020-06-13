import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from './register.dto';
import { validate } from 'class-validator';
import { UserDto } from './dto/user.dto';

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

  findByLogin(email: string, password: string) {
    const user = this.userRepository.create();
    user.email = email;
    user.password = password;
    return this.userRepository.findOne(user);
  }

  async findByPayload({ email }: any): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
