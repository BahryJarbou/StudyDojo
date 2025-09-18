const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl shadow-black lg:w-[60%] rounded-4xl mt-4 self-center px-4">
      <div className="navbar-start">
        <button className="btn btn-ghost sm:text-xs lg:text-xl rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Study Dojo
        </button>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Sign In
        </a>
        <a className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Sign Up
        </a>
        <a className="btn rounded-4xl btn-soft btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          About Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
