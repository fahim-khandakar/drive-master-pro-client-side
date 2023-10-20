import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/download.png";
import swal from "sweetalert";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Profile from "../Profile/Profile";

const Navbar = () => {
  const toggleTheme = () => {
    const icon = document.getElementById("icon");

    document.documentElement.classList.toggle("dark-mode");

    if (document.documentElement.classList.contains("dark-mode")) {
      icon.src = "/sun.png";
    } else {
      icon.src = "moon.png";
    }
  };
  const { user, logOut } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const brand = brands.map((data) => data.carBrand);
  const signOut = () => {
    logOut()
      .then(() => swal("Successfully!", "You Are Log Out", "success"))
      .catch(() => swal("Opps!", "Something went wrong", "success"));
  };
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const isHome =
    location.pathname === "/" ||
    location.pathname === `/brandDetails/${brand[0]}` ||
    location.pathname === `/brandDetails/${brand[1]}` ||
    location.pathname === `/brandDetails/${brand[2]}` ||
    location.pathname === `/brandDetails/${brand[3]}` ||
    location.pathname === `/brandDetails/${brand[4]}` ||
    location.pathname === `/brandDetails/${brand[5]}`;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`${
        scrolling || !isHome
          ? "bg-[var(--bg)] text-[var(--text)] shadow-md"
          : "bg-transparent text-white"
      } transition-all    duration-500 ease-in-out fixed w-full top-0 z-10  `}
    >
      <div className="navbar mx-auto max-w-6xl px-5 md:p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="gap-10 menu-sm dropdown-content text-black mt-1 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-semibold normal-case text-base md:text-2xl font-serif flex items-center">
            <img src={logo} alt="" />
            <h2 className="hidden md:block">Drive Master Pro</h2>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2 md:gap-5">
          <img
            id="icon"
            className="w-[30px] text-[var(--logo)]"
            onClick={toggleTheme}
            src="/moon.png"
            alt=""
          />
          {user ? (
            <details>
              <summary
                style={{
                  cursor: "pointer",
                  outline: "none",
                  listStyleType: "none",
                }}
              >
                <Profile></Profile>
              </summary>
              <ul className="p-2 absolute shadow menu dropdown-content z-[1] bg-white text-black rounded-box w-32 md:w-40">
                <li className="list-none mx-auto rounded-md  text-xs md:text-base md:btn-ghost">
                  <button onClick={signOut}>Sign Out</button>
                </li>
              </ul>
            </details>
          ) : (
            <li className="list-none md:btn md:btn-ghost text-xs md:text-base">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
