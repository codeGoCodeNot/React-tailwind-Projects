import "./style.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Square } from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Square />
  </StrictMode>
);
