import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Global } from "@emotion/react";
import { getDesignTokens } from "../components/theme/theme";
import { useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import "../styles/App.css";
import { TodoContextProvider } from "@/components/context/TodoContext";

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const designTokens: any = getDesignTokens();
  const theme = useMemo(() => createTheme(designTokens), [mode]);

  return (
    <TodoContextProvider>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: {
              padding: 0,
              margin: 0,
              backgroundColor: theme.palette.onBackground.main,
              fontFamily: "'Roboto Mono', monospace",
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </TodoContextProvider>
  );
}

export default App;
