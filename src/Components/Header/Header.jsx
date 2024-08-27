import React, { useState } from "react";
import "./Header.css";
// import { LuUser, LuShoppingCart } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="headerContainer">
      <div className="Logo">
        <Link to="/" className="Logo">
         <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="HeaderNav">
        <NavLink
          to="/"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "black" } : { color: "white" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "black" } : { color: "white" })}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact_us"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "black" } : { color: "white" })}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/blog"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "black" } : { color: "white" })}
        >
          Blog
        </NavLink>
      </ul>
      <div className="btns">
       <button className="btn1">SignUp</button>
       <button className="btn1">Login</button>
      </div>
    </div>
  );
};

export default Header;
