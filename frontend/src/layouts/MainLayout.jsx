import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MainLayout = () => {
  const { user, loading } = use(AuthContext);
  return !loading ? (
    user ? (
      <main className="bg-[url(https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-fill w-full">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="min-h-screen flex flex-col backdrop-blur-sm gap-4 items-center justify-between w-full">
              <Navbar
                sideBarBtn={
                  <label
                    htmlFor="my-drawer"
                    className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl drawer-button"
                  >
                    Show Courses
                  </label>
                }
              />
              <div className="flex-grow p-4">
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    ) : (
      <main className="bg-[url(https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-fill w-full">
        {/* Page content here */}
        <div className="min-h-screen flex flex-col backdrop-blur-sm gap-4 items-center justify-between w-full">
          <Navbar />
          <div className="flex-grow p-4">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    )
  ) : (
    <span className="loading loading-spinner loading-xl"></span>
  );
};

export default MainLayout;
