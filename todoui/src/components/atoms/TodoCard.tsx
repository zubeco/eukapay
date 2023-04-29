import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Paper, Typography } from "@mui/material";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";
import { useRouter } from "next/router";

interface Todo {
  id: number;
  content: string;
  dueDate: string;
  status: boolean;
}

export default function TodoCard() {
  const router = useRouter();
  const { shouldRefetch, toggleRefetch } = useContext(TodoContext);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get<Todo[]>(
        "http://localhost:3000/api/todos"
      );
      setTodos(response.data);
    };

    fetchTodos();
  }, [shouldRefetch]); // refetch when the shouldRefetch value changes

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3000/api/todos?id=${id}`);
    toggleRefetch(); // trigger a refetch after deleting a todo
  };

  return (
    <Box sx={{ marginTop: "50px" }}>
      {todos.map((todo) => (
        <Paper
          key={todo.id}
          sx={{
            width: "100%",
            marginBottom: "1rem",
            borderColor: "#F6F1E9",
            backgroundColor: "#171717",
            color: "#FFFFFF",
            padding: "20px ",
            boxSizing: "border-box",
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              textDecoration: todo.status === true ? "line-through" : "none",
            }}
          >
            {todo.content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              boxSizing: "border-box",
            }}
          >
            <BsDot
              style={{
                color: todo.status === true ? "#69CCA4" : "red",
                fontSize: "25px",
              }}
            />{" "}
            <AiOutlineEdit
              style={{ color: "white", fontSize: "21px", cursor: "pointer" }}
              onClick={() => router.push(`/edit/${todo.id}`)}
            />
            <AiOutlineDelete
              style={{ color: "white", fontSize: "21px", cursor: "pointer" }}
              onClick={() => handleDelete(todo.id)}
            />
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
