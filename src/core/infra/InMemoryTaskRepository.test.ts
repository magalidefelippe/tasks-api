import { Task } from "../domain/Task";
import { InMemoryTaskRepository } from "./InMemoryTaskRepository";


describe("A task memory repository use case", () => {
    const repository = new InMemoryTaskRepository();
    repository.find = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Can save a task ", () => {
        const content = "Lavar los platos";

        const task: Task = {
            content,
            status: false
        }
        repository.create(task);
        const incompleteTasks = repository.getIncompleteTasks();

        expect(incompleteTasks).toEqual([task]);
    })

    test("Can determine if a task exist or not", () => {
        const content = "lavar los platos";
        repository.find = jest.fn().mockReturnValue(false);
        const exist = repository.find(content);

        expect(exist).toBeFalsy();
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