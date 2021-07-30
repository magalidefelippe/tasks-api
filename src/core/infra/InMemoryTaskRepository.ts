import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";

interface InMemoryTask {
    content: string,
    status: boolean
}

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Map<string, InMemoryTask> = new Map<string, InMemoryTask>();

    public create(task: Task): void {
        const existTask = this.tasks.get(task.content);
        if (existTask) {
            throw new Error('The task allready exist');
        } else {
            const newTask: InMemoryTask = {
                content: task.content,
                status: task.status
            };

            this.tasks.set(task.content, newTask);
        }
    }

    public getIncompleteTasks(){
        const tasksIncomplete = this.tasks.values();
        const incompleteTasksList = []
        Array.from(tasksIncomplete, (task) =>{
            if(task.status == false) incompleteTasksList.push({content: task.content, status: task.status})
        })

        return incompleteTasksList;
    }
}