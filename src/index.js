import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontFamily: "Inter, Arial, sans-serif",
    },
    h2: {
      fontFamily: "Inter, Arial, sans-serif",
    },
    h6: {
      fontFamily: "Inter, Arial, sans-serif",
    },
    h7: {
      fontFamily: "Inter, Arial, sans-serif",
    },
    body: {
      fontFamily: "Inter, Arial, sans-serif",
    },
    body1: {
      fontFamily: "Inter, Arial, sans-serif",
    },
    body2: {
      fontFamily: "Inter, Arial, sans-serif",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ,
  </React.StrictMode>
);
