import { Todo } from './entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodo } from './dto/create-todo.dto';
import { User } from '../users/entity/user.entity';
import { EditDto } from './dto/edit-todo.dto';
export declare class TodosService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(id: number): Promise<Todo[]>;
    createOne(body: CreateTodo, user: User): Promise<{
        message: string;
    }>;
    deleteOneOrMany(ids: number[]): Promise<{
        message: string;
    }>;
    editOne(todo: EditDto): Promise<{
        message: string;
        data: Todo;
    }>;
}
