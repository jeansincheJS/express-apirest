import { Request, Response } from "express";
import { prisma } from "../../data";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";

export class TodosController {
    constructor() {

    }
    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) return res.status(400).json({ error });
        const todo = await prisma.todo.create({
            data: createTodoDto!,
        });
        res.status(200).json(todo);
    }
}