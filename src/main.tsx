import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./routing.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </StrictMode>
);
