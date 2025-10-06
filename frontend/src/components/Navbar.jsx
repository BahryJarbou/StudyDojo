import { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NavLink } from "react-router";
import ThemeSelector from "./themeSelector";

const Navbar = ({ sideBarBtn }) => {
  const { loading, user, logout } = use(AuthContext);
  return !loading ? (
    !user ? (
      <div className="navbar z-300 bg-base-100 w-full shadow-xl shadow-black lg:w-[60%] rounded-4xl mt-[1rem] mb-[2rem] lg:mb-[8rem] self-center px-4">
        <div className="navbar-start gap-4">
          <NavLink
            to="/"
            className="btn btn-ghost sm:text-xs lg:text-xl rounded-4xl btn-soft btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            <img
              src="studyDojo.png"
              alt="Home"
              className="h-[2rem] lg:h-[4rem] object-cover"
            />
          </NavLink>
        </div>
        <div className="navbar-end gap-4">
          <ThemeSelector />
          <NavLink
            to="/login"
            className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    ) : (
      <div className="navbar bg-base-100 w-full shadow-xl shadow-black lg:w-[60%] rounded-4xl mt-[1rem] mb-[2rem] lg:mb-[8rem] self-center px-4">
        <div className="navbar-start gap-4">
          <NavLink
            to="/courses"
            className="btn btn-ghost sm:text-xs lg:text-xl rounded-4xl btn-soft btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            <img
              src="studyDojo.png"
              alt="Home"
              className="h-[2rem] lg:h-[4rem] object-cover"
            />
          </NavLink>
        </div>
        <div className="navbar-end gap-4">
          {sideBarBtn}
          <ThemeSelector />

          <button
            onClick={logout}
            className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            logout
          </button>
        </div>
      </div>
    )
  ) : (
    <span className=" absolute translate-1/2 top-[50%] left-[50%] loading loading-spinner loading-xl"></span>
  );
};

export default Navbar;
