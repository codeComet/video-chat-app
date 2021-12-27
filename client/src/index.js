import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./SocketContext";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ContextProvider>,
  document.getElementById("root")
);
