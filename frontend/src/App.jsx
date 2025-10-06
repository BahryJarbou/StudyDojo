import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/about";
import CourseContent from "./components/CourseContent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="/" element={<ProtectedLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseContent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
