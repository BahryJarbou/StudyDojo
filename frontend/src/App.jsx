import { Route, Routes, useLocation } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/about";
import CourseContent from "./components/CourseContent";
import { AnimatePresence, motion } from "motion/react";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <AnimatedRoutes />
    </div>
  );
}

export default App;

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />
          <Route
            path="/signup"
            element={
              <PageWrapper>
                <Signup />
              </PageWrapper>
            }
          />
          <Route
            path="about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/"
            element={
              <PageWrapper>
                <ProtectedLayout />
              </PageWrapper>
            }
          >
            <Route
              path="/profile"
              element={
                <PageWrapper>
                  <Profile />
                </PageWrapper>
              }
            />
            <Route
              path="/courses"
              element={
                <PageWrapper>
                  <Courses />
                </PageWrapper>
              }
            />
            <Route
              path="/courses/:id"
              element={
                <PageWrapper>
                  <CourseContent />
                </PageWrapper>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};
