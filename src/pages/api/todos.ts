import { NextApiRequest, NextApiResponse } from "next";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  getTodoById,
} from "./todoHandler";

const TodoApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET" && req.query.id) {
    await getTodoById(req, res);
  } else if (req.method === "GET") {
    await getTodos(req, res);
  } else if (req.method === "POST") {
    await addTodo(req, res);
  } else if (req.method === "DELETE") {
    await deleteTodo(req, res);
  } else if (req.method === "PUT") {
    await updateTodo(req, res);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default TodoApi;
