import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Crud } from '@nestjsx/crud';
import { Todo } from './todo.entity';
import { CreateTodo } from './create-todo.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Crud({
  model: {
    type: Todo,
  },
})
@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllTodo() {
    return this.todosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createOne(@Body() body: CreateTodo) {
    return this.todosService.createOne(body);
  }
}
