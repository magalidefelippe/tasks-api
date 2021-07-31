import { Task } from "../domain/Task";
import { InMemoryTaskRepository } from "./InMemoryTaskRepository";


describe("A task memory repository use case", () => {
    const repository = new InMemoryTaskRepository();

    test("Can save a task if it not exist", () => {
        const content = "Lavar los platos";

        const task: Task = {
            content,
            status: false
        }
        repository.create(task);
        const incompleteTasks = repository.getIncompleteTasks();

        expect(incompleteTasks).toEqual([task]);
    })

    test("Can return the incomplete tasks", () => {
        const incompleteTasks = repository.getIncompleteTasks();

        expect(incompleteTasks).toBeDefined();
        expect(incompleteTasks[0].status).toBeFalsy();
    })

    test("Can return the complete tasks", () => {
        const taskComplete: Task = {
            content: 'A complete task',
            status: true
        }
        repository.create(taskComplete);
        const completeTasks = repository.getCompleteTasks();

        expect(completeTasks).toBeDefined();
        expect(completeTasks[0].status).toBeTruthy();
    })
})