import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { setup } from "goober";

const theme = {
  colors: { 100: "#FFA3FD", 200: "#E384FF", 300: "#865DFF", 400: "#191825" },
};
const ThemeContext = React.createContext(theme);
const useTheme = () => React.useContext(ThemeContext);

setup(React.createElement, undefined, useTheme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
