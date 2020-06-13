import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodo } from './create-todo.dto';
import { User } from '../users/user.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  findAll(id: number): Promise<Todo[]> {
    return this.todoRepository.find({ userId: id });
  }

  async createOne(body: CreateTodo, user: User) {
    try {
      const todo = this.todoRepository.create(body);
      todo.user = user;
      todo.status = true;
      await this.todoRepository.save(todo);
      return {
        message: 'success',
      };
    } catch (error) {
      return {
        message: 'error',
      };
    }
  }
}
