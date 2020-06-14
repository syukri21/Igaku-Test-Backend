import { TodosService } from './todos.service';
import { Todo } from './entity/todo.entity';
import { CreateTodo } from './dto/create-todo.dto';
import { DeleteDto } from './dto/delete-todo.dto';
import { EditDto } from './dto/edit-todo.dto';
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    getAllTodo(req: any): Promise<Todo[]>;
    createOne(body: CreateTodo, req: any): Promise<{
        message: string;
    }>;
    deleteOneOrMany(body: DeleteDto): Promise<{
        message: string;
    }>;
    editOne(body: EditDto): Promise<{
        message: string;
        data: Todo;
    }>;
}
