import { Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
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
        cursor: "pointer",
      }}
      onClick={() => router.push("/")} // Add onClick prop with the handleClick function
    >
      Get Things Done!
    </Typography>
  );
}
