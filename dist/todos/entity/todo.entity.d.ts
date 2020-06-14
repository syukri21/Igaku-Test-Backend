import { User } from '../../users/entity/user.entity';
export declare class Todo {
    id: number;
    task: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    user: User;
    userId: number;
}
