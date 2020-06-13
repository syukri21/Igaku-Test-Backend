import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Delete,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Crud } from '@nestjsx/crud';
import { Todo } from './entity/todo.entity';
import { CreateTodo } from './dto/create-todo.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { User } from '../users/user.entity';
import { DeleteDto } from './dto/delete-todo.dto';
import { EditDto } from './dto/edit-todo.dto';

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

  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteOneOrMany(@Body() body: DeleteDto) {
    return this.todosService.deleteOneOrMany(body.ids);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  editOne(@Body() body: EditDto) {
    return this.todosService.editOne(body);
  }
}
