
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    primaryHover: { main: string };
    onBackground: { main: string };
    secondaryDarker: { main: string };
  }

  interface PaletteOptions {
    primaryHover: { main: string };
    onBackground: { main: string };
    secondaryDarker: { main: string };
  }
}

export const getDesignTokens = () => ({
  palette: {
    // palette values for dark mode
    onBackground: {
      main: "#171717",
    },
    secondary: {
      main: "#B9E0FF",
    },
    secondaryDarker: {
      main: "#B9E0FF",
    },
    primary: {
      main: "#eeeeee",
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 800,
      lineHeight: "120%",
      letterSpacing: "-0.03em",
      fontFamily: `'Manrope', sans-serif`,
    },
  },
});
