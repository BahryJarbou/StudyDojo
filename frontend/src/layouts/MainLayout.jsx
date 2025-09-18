import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="bg-[url(https://images.unsplash.com/photo-1517495306984-f84210f9daa8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative">
      <div className="min-h-screen flex flex-col backdrop-blur-3xl gap-4 items-center justify-between">
        <Navbar />
        <div className="flex-grow p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
