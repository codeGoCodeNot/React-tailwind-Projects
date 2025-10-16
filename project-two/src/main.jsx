import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import products from "./data.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App products={products} />
  </StrictMode>
);
