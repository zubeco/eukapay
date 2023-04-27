import React from "react";
import styles from "@/styles/Home.module.css";
import { Box, Paper, useTheme } from "@mui/material";
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
