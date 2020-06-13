import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Crud, CrudRequest } from '@nestjsx/crud';
import { Todo } from './todo.entity';
import { CreateTodo } from './create-todo.dto';

@Crud({
  model: {
    type: Todo,
  },
})
@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getMany() {
    return this.todosService.findAll();
  }

  @Post()
  createOne(@Body() body: CreateTodo) {
    return this.todosService.createOne(body);
  }
}
