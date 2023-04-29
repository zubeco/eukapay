import Header from "@/components/atoms/Header";
import Wrapper from "@/components/atoms/Wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditTextField from "@/components/atoms/EditTextField";
import dayjs from "dayjs";

interface Todo {
  id: number;
  content: string;
  dueDate: string;
  status: boolean;
}

export default function EditTodo() {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState<Todo>();

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get<Todo>(
        `http://localhost:3000/api/todos?id=${id}`
      );
      console.log(response.data);
      setTodo(response.data);
    };

    if (id) {
      fetchTodo();
    }
  }, [id]);

  const formattedDueDate = todo
    ? dayjs(todo.dueDate, "DD/MM/YYYY").toDate()
    : null;
  console.log(formattedDueDate, "ggg");
  console.log(typeof formattedDueDate); // "object" or "undefined" if null
  console.log(formattedDueDate instanceof Date); // true or false depending on whether formattedDueDate is a Date instance or not

  return (
    <Wrapper>
      <Header />
      {todo && (
        <EditTextField
          id={todo.id}
          content={todo.content}
          dueDate={formattedDueDate}
          status={todo.status}
        />
      )}
    </Wrapper>
  );
}
