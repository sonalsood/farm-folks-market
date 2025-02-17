import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li
          className={`nav__item ${location.pathname === "/" ? "active" : ""}`}
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={`nav__item ${
            location.pathname === "/vendors" ? "active" : ""
          }`}
        >
          <Link to={"/vendors"}>Explore</Link>
        </li>
        <li
          className={`nav__item ${
            location.pathname === "/register" ? "active" : ""
          }`}
        >
          <Link to={"/register"}>Join Us</Link>
        </li>
        <li
          className={`nav__item ${
            location.pathname === "/vendors" ? "active" : ""
          }`}
        >
          <Link to={"/vendors"}>My List</Link>
        </li>
        <li
          className={`nav__item ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          <Link to={"/about"}>About Us</Link>
        </li>
        <li
          className={`nav__item ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
