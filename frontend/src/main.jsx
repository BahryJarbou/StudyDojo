import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { CoursesProvider } from "./context/coursesContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CoursesProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CoursesProvider>
  </BrowserRouter>
);
