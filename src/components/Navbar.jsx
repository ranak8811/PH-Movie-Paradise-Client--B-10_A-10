import { Link, NavLink } from "react-router-dom";
import "../styles/style.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser, darkMode, setDarkMode } = useContext(AuthContext);

  const links = (
    <div className="lg:flex gap-2 space-y-1 lg:space-y-0">
      <li>
        <NavLink to={"/"} className="custom-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/allMovies"} className="custom-link">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addMovie"} className="custom-link">
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink to={"/favouriteMovies"} className="custom-link">
          My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink to={"/trendingMovies"} className="custom-link">
          Trending Movies
        </NavLink>
      </li>
    </div>
  );

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`navbar ${
        darkMode
          ? "bg-black text-white border-b border-gray-700"
          : "bg-white text-black border-b border-gray-200"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                darkMode ? "text-green-500" : "text-red-500"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            } rounded-box z-[1] mt-3 w-52 p-2 shadow`}
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className={`btn btn-ghost text-xl font-bold ${
            darkMode ? "text-green-400" : "text-red-500"
          }`}
        >
          Movie-Paradise
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            {user && user.photoURL && (
              <img
                referrerPolicy="no-referrer"
                title={user.displayName}
                src={user.photoURL}
                alt={user.displayName}
                className={`w-10 border-2 cursor-pointer rounded-full object-cover ${
                  darkMode ? "border-green-500" : "border-red-500"
                }`}
              />
            )}
          </div>
          <div>
            {user && user.displayName ? (
              <div className="flex items-center gap-3">
                <h6
                  className={`font-semibold hidden md:block ${
                    darkMode ? "text-green-400" : "text-red-500"
                  }`}
                >
                  {user.displayName}
                </h6>
                <button
                  onClick={logOutUser}
                  className={`btn ${
                    darkMode
                      ? "bg-green-500 hover:bg-green-700 text-black"
                      : "bg-red-500 hover:bg-orange-500 text-white"
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-x-2">
                <Link
                  to={"/auth/login"}
                  className={`btn ${
                    darkMode
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white hover:bg-green-500"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to={"/auth/register"}
                  className={`btn ${
                    darkMode
                      ? "bg-red-500 text-white hover:bg-green-500"
                      : "bg-green-500 text-black"
                  }`}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button onClick={handleThemeToggle} className="btn">
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
