import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { CoursesProvider } from "./context/coursesContext.jsx";
import { FlashcardsProvider } from "./context/FlashcardsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CoursesProvider>
      <FlashcardsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FlashcardsProvider>
    </CoursesProvider>
  </BrowserRouter>
);
