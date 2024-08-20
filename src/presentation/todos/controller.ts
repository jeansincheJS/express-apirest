import { Request, Response } from "express";
import { prisma } from "../../data";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto";

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
    public getTodos = async (req: Request, res: Response) => {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
    }
    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: 'id must be a valid number' });
        const todo = await prisma.todo.findFirst({
            where: { id },
        });
        if (!todo) return res.status(404).json({ error: 'todo not found' });
        res.status(200).json(todo);
    }
    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });
        const todo = await prisma.todo.findFirst({
            where: { id },
        });
        if (!todo) return res.status(404).json({ error: `todo with id ${id} not found` });
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: updateTodoDto!.values,
        });
        res.json(updatedTodo);
    }
    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const todo = await prisma.todo.findFirst({
            where: { id },
        });
        if (!todo) return res.status(404).json({ error: `todo with id ${id} not found` });
        await prisma.todo.delete({
            where: { id },
        });
        res.status(200).json({ message: 'todo deleted' });
    }
}