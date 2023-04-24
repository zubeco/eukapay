import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} from "../controllers/todos.controller";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { content, dueDate } = req.body;
    const newTodo = await createTodo(content, dueDate);
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await getTodoById(Number(req.params.id));
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await updateTodo(Number(req.params.id), req.body);
    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await deleteTodo(Number(req.params.id));
    res.json(deletedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

export default router;
