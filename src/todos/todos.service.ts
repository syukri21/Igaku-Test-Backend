import {
  Injectable,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodo } from './dto/create-todo.dto';
import { User } from '../users/user.entity';
import { response } from 'express';
import { stat } from 'fs';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  findAll(id: number): Promise<Todo[]> {
    return this.todoRepository.find({ userId: id });
  }

  async createOne(body: CreateTodo, user: User) {
    const todo = this.todoRepository.create(body);
    todo.user = user;
    todo.status = true;
    await this.todoRepository.save(todo);
    return {
      message: 'success',
    };
  }

  async deleteOneOrMany(ids: number[]) {
    if (ids.length <= 0) {
      throw new HttpException('no ids', HttpStatus.BAD_REQUEST);
    }
    const deleteAll = ids.map(id => this.todoRepository.delete(id));
    await Promise.all(deleteAll);
    return {
      message: 'success',
    };
  }
}
