import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Crud } from '@nestjsx/crud';
import { Todo } from './todo.entity';
import { CreateTodo } from './create-todo.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt } from 'passport-jwt';
import { User } from '../users/user.entity';

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
  getAllTodo(@Request() req) {
    const { id }: User = req.user;
    return this.todosService.findAll(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createOne(@Body() body: CreateTodo, @Request() req) {
    return this.todosService.createOne(body, req.user);
  }
}
