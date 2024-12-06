import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// "!" garante que vai retornar um elemento, nunca vai ser null
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
