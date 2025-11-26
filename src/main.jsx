import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import TaskPage from "./Pages/TaskPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskPage />
  </StrictMode>
);
