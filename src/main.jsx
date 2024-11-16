import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { ToolProvider } from "./context/ToolContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToolProvider>
    <App />
  </ToolProvider>
);
