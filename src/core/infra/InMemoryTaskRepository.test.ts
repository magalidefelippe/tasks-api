import { Task } from "../domain/Task";


describe("A task memory repository use case", () => {
    const repository = new InMemoryTaskRepository();
    const incompleteTasks = repository.getIncompleteTasks();

    test("Can save a task", () => {
        const content = "Lavar los platos";

        const task: Task = {
            content,
            status: false
        }
        repository.create(task);
        const incompleteTasks = repository.getIncompleteTasks();

        expect(incompleteTasks).toEqual(task);
    })

    test("Can return the incomplete tasks", () => {
        const incompleteTasks = repository.getIncompleteTasks();

        expect(incompleteTasks).toBeDefined();
    })
})