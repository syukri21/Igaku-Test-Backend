import { Module } from '@nestjs/common';

import { Connection } from 'typeorm';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({}), TodosModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
