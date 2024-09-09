import React, { useState } from "react";
import "./Header.css";
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
          style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/About_Us"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
        >
          About Us
        </NavLink>
        <NavLink
          to="/Services"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
        >
          Our Value
        </NavLink>
        <NavLink
          to="/About_Us"
          className="nav"
          style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}
        >
          Contacts
        </NavLink>
      </ul>
      <div className="btns">

//       <button className="btn1"><Link to='/SignUp' className="btn1">SignUp</Link></button>
//        <button className="btn1"><Link to='/Login' className="btn1"> Login</Link></button>

     <Link to='/SignUp' className="btn1">SignUp</Link>
       <Link to='/Login' className="btn1">Login</Link>

      </div>
    </div>
  );
};

export default Header;
