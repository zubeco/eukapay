import React from "react";
import styles from "@/styles/Home.module.css";
import { Box, Paper, useTheme } from "@mui/material";
import Header from "./atoms/Header";
import Todo from "./Todo";
import TodoCard from "./atoms/TodoCard";

export default function Body() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          minHeight: "70vh",
          width: "90%",
          maxWidth: "800px",
          backgroundColor: "#F0F0F0",
          padding: "20px 20px",
          boxSizing: "border-box",
          [theme.breakpoints.up("sm")]: {
            width: "80%",
          },
          [theme.breakpoints.up("md")]: {
            width: "70%",
          },
          [theme.breakpoints.up("lg")]: {
            width: "60%",
            padding: "40px 40px",
          },
        }}
      >
        <Header />
        <Todo />
        <TodoCard />
      </Paper>
    </Box>
  );
}
