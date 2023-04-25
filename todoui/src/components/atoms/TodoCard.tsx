import { Box, Paper, Typography } from "@mui/material";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function TodoCard() {
  return (
    <Paper
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
      <Typography>Todo</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <AiOutlineEdit style={{ color: "white", fontSize: "21px" }} />
        <AiOutlineDelete style={{ color: "white", fontSize: "21px" }} />
      </Box>
    </Paper>
  );
}
