import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./routing.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/React-Assignment/">
      <Routing />
    </BrowserRouter>
  </StrictMode>
);
