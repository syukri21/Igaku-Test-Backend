import { Todo } from '../../todos/entity/todo.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    created_at: Date;
    updated_at: Date;
    todos: Todo[];
}
