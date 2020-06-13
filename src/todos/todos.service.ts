import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Todo } from './todo';

@Injectable()
export class TodosService extends TypeOrmCrudService<Todo> {
  constructor(@InjectRepository(Todo) repo) {
    super(repo);
  }

  getTodos() {
    return [
      {
        tasks: 'nama',
        active: false,
      },
      {
        tasks: 'saya',
        active: false,
      },
    ];
  }
}
