import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

interface InMemoryTask {
    content: string,
    status: boolean
}

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Map<string, InMemoryTask> = new Map<string, InMemoryTask>();

    public find(content: string): boolean {
        const existTask = this.tasks.get(content);
        if (existTask) {
            return true;
        } else {
            return false;
        }
    };

    public create(task: Task): void {
        this.tasks.set(task.content, task);
    };

    public getIncompleteTasks() {
        const tasksIncomplete = this.tasks.values();
        const incompleteTasksList = [];
        Array.from(tasksIncomplete, (task) => {
            if (task.status == false) incompleteTasksList.push({ content: task.content, status: task.status })
        });
        return incompleteTasksList;
    };

    public getCompleteTasks() {
        const taskdComplete = this.tasks.values();
        const completeTasksList = [];
        Array.from(taskdComplete, (task) => {
            if (task.status == true) completeTasksList.push({ content: task.content, status: task.status })
        });
        return completeTasksList;
    };
}