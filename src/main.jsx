import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CurrencyProvider from "./Context/CurrencyProvider.jsx";
import ModeProvider from "./Context/ModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModeProvider>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
    </ModeProvider>
  </React.StrictMode>
);
