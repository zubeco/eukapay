import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider, Global } from "@emotion/react";
import { getDesignTokens } from "../components/theme/theme";
import { useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import "../styles/App.css";


function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const designTokens: any = getDesignTokens();
  const theme = useMemo(() => createTheme(designTokens), [mode]);

  return (
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
  );
}

export default App;
