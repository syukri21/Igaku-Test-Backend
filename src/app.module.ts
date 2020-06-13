import { Module } from '@nestjs/common';

import { Connection } from 'typeorm';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({}), TodosModule, UsersModule, AuthModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
