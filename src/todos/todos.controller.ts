import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Crud } from '@nestjsx/crud';
import { Todo } from './todo';

@Crud({
  model: {
    type: Todo,
  },
})
@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
}
