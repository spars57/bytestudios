import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E0F72",
      light: "#EC88FC",
    },
    secondary: {
      main: "#9119F6",
      light: "#C22AF6",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "sora-regular",
    },
    button: {
      fontFamily: "sora-bold",
    },
    caption: {
      fontSize: 10,
    },
    body1: {
      fontSize: 11,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          padding: 10,
          borderRadius: 10,
          fontSize: 12,
        },
      },
    },
  },
});

export default theme;
