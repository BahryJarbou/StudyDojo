import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="bg-[url(https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover w-full">
      <div className="min-h-screen flex flex-col backdrop-blur-sm gap-4 items-center justify-between w-full">
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
