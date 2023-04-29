import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

interface Todo {
  id: number;
  content: string;
  dueDate: Date;
  status: boolean;
}

export const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const todosData = await fs.readFile("data/todos.json", "utf-8");
    const todos = JSON.parse(todosData) as Todo[];
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting todos" });
  }
};

export const addTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const todosData = await fs.readFile("data/todos.json", "utf-8");
    const todos = JSON.parse(todosData) as Todo[];
    const newTodo = {
      id: todos.length + 1,
      content: req.body.content,
      dueDate: req.body.dueDate,
      status: false,
    };
    todos.push(newTodo);
    await fs.writeFile("data/todos.json", JSON.stringify(todos));
    res.status(201).json(newTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding todo" });
  }
};

export const deleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = parseInt(req.query.id as string, 10);
    const todosData = await fs.readFile("data/todos.json", "utf-8");
    const todos = JSON.parse(todosData) as Todo[];
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    await fs.writeFile("data/todos.json", JSON.stringify(filteredTodos));
    res
      .status(200)
      .json({ message: `Todo with ID ${id} deleted successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting todo" });
  }
};

export const updateTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = parseInt(req.query.id as string, 10);
    const todosData = await fs.readFile("data/todos.json", "utf-8");
    const todos = JSON.parse(todosData) as Todo[];
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      res.status(404).json({ message: `Todo with ID ${id} not found` });
      return;
    }
    const updatedTodo = {
      ...todos[todoIndex],
      content: req.body.content,
      dueDate: req.body.dueDate,
      status: req.body.status,
    };
    todos[todoIndex] = updatedTodo;
    await fs.writeFile("data/todos.json", JSON.stringify(todos));
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating todo" });
  }
};

export const getTodoById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const id = parseInt(req.query.id as string, 10);
    const todosData = await fs.readFile("data/todos.json", "utf-8");
    const todos = JSON.parse(todosData) as Todo[];
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      res.status(404).json({ message: `Todo with ID ${id} not found` });
      return;
    }
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting todo" });
  }
};
