import React from "react";
import { useTheme } from "@mui/material";
import Header from "./atoms/Header";
import Todo from "./Todo";
import TodoCard from "./atoms/TodoCard";
import Wrapper from "./atoms/Wrapper";

export default function Body() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Header />
      <Todo />
      <TodoCard />
    </Wrapper>
  );
}
