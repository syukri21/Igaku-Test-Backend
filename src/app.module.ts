import { Module } from '@nestjs/common';

import { Connection } from 'typeorm';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({}), TodosModule, UsersModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
