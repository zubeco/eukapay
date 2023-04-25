import { Box } from "@mui/material";
import React from "react";
import MyTextField from "./atoms/TextField";

export default function Todo() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box>
        <MyTextField />
      </Box>
    </Box>
  );
}
