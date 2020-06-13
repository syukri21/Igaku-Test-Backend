import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodo } from './create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}
  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async createOne(body: CreateTodo) {
    try {
      const todo = this.todoRepository.create(body);
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
