import { Module } from '@nestjs/common';

import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
