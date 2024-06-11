import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./modules/home/index.tsx";
import theme from "./theme/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
