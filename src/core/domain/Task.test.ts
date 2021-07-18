import { Task } from "./Task";

describe("A task interface use case", () => {

    test("Can create a task", () => {
        const content = "Lavar los platos";

        const task: Task = {
            content,
            status: false
        }

        expect(task.content).toEqual(content);
        expect(task.status).toEqual(false);
    })
})