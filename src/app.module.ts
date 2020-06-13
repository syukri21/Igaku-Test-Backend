import { Module } from '@nestjs/common';

import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class AppModule {}
