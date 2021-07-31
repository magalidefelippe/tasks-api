import { Task } from "./Task";

export interface TaskRepository{
    create: (task: Task) => void;
    find: (content: string) => boolean;
    getIncompleteTasks: () => Task[];
    getCompleteTasks: () => Task[];
}