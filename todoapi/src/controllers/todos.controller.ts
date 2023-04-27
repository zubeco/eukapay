import { TodoItem } from "../model/todoItem.type";
import { readDataFile, writeDataFile } from "../utils/dataUtils";

const listTodos = async (): Promise<TodoItem[]> => {
  const todoList = await readDataFile();
  return todoList;
};

export const getAllTodos = async (): Promise<TodoItem[]> => {
  const todoList = await listTodos();
  return todoList;
};

export const getTodoById = async (id: number): Promise<TodoItem> => {
  const todoList = await listTodos();
  const todo = todoList.find((item) => item.id === id);
  if (!todo) {
    throw new Error(`No todo item found with id ${id}`);
  }
  return todo;
};

export const createTodo = async (
  content: string,
  dueDate: Date
): Promise<TodoItem> => {
  const todoList = await listTodos();
  const newTodo: TodoItem = {
    id: todoList.length + 1,
    content,
    dueDate,
    status: false,
  };
  todoList.push(newTodo);
  await writeDataFile(todoList);
  return newTodo;
};

export const updateTodo = async (
  id: number,
  content?: string | { content: string; dueDate?: Date; status?: boolean }
): Promise<TodoItem> => {
  const todoList = await listTodos();
  const index = todoList.findIndex((item) => item.id === id);
  if (index < 0) {
    throw new Error(`No todo item found with id ${id}`);
  }

  const updatedContent =
    typeof content === "object" ? content.content : content;

  const updatedDueDate =
    typeof content === "object" && content.dueDate
      ? content.dueDate
      : todoList[index].dueDate;

  const updatedStatus =
    typeof content === "object" && typeof content.status === "boolean"
      ? content.status
      : todoList[index].status;

  const updatedTodo = {
    id,
    content: updatedContent ?? todoList[index].content,
    dueDate: updatedDueDate,
    status: updatedStatus,
  };

  todoList[index] = updatedTodo;

  await writeDataFile(todoList);

  return updatedTodo;
};

export const deleteTodo = async (
  id: number
): Promise<{ deleted: boolean; todo: TodoItem }> => {
  const todoList = await listTodos();
  const index = todoList.findIndex((item) => item.id === id);
  if (index < 0) {
    throw new Error(`No todo item found with id ${id}`);
  }
  const deletedTodo = todoList.splice(index, 1)[0];
  await writeDataFile(todoList);
  return { deleted: true, todo: deletedTodo };
};
