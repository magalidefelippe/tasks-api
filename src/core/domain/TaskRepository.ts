import { Task } from "./Task";

export interface TaskRepository{
    create: (task: Task) => void;
    getIncompleteTasks: () => Task[];
}