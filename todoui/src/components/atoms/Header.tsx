import { Typography, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "21px",
        padding: "20px 0 40px 0",
        [theme.breakpoints.up("lg")]: {
          fontSize: "32px",
        },
      }}
    >
      Get Things Done!
    </Typography>
  );
}
