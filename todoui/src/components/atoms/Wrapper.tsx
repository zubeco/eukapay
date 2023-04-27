import { Box, Paper, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  minHeight?: string;
  maxWidth?: string;
  backgroundColor?: string;
  padding?: string;
};

export default function Wrapper({
  children,
  minHeight = "50vh",
  maxWidth = "800px",
  backgroundColor = "#F0F0F0",
  padding = "20px",
}: WrapperProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: minHeight,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <Paper
        sx={{
          minHeight: minHeight,
          width: "90%",
          maxWidth: maxWidth,
          backgroundColor: backgroundColor,
          padding: padding,
          boxSizing: "border-box",
          [theme.breakpoints.up("sm")]: {
            width: "80%",
          },
          [theme.breakpoints.up("md")]: {
            width: "70%",
          },
          [theme.breakpoints.up("lg")]: {
            width: "60%",
            padding: "40px",
          },
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
