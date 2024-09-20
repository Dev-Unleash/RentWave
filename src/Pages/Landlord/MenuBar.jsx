// import React from 'react'
// import './Landlord.css'

// const MenuBar = () => {
//   return (
//     <div className='MenuBar'>
      
//     </div>
//   )
// }

// export default MenuBar





import React, { useState } from "react";
import image from "../../assets/Frame 775.png";
import { CiStar } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import "./MenuBar.css";
import Logout from "./Logout";
import { GiFamilyHouse } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";

const MenuBar = () => {
 

  return (
    <div className="Sidebarwhole1">
      <Link to="/">
        <div className="LogoContainer1">
          <div className="Logo1">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </Link>

      <div className="Profile1">
        <div className="Pics1">
        <Link to="/profile">
          <img src={image} alt="Profile" />
        </Link>
        </div>
        <p>Mr. Johnson</p>
        <h3>Welcome</h3>
      </div>

      <div className="MenuContainer1">
        <div className="MenuWrapper1">
          <nav>
            <IoHome className="menuIcon1" />
            <NavLink to="/LandLord" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Home
            </NavLink>
          </nav>
          <nav>
          <GiFamilyHouse className="menuIcon1" />           
            <NavLink to="/propertics" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
            Properties
            </NavLink>
          </nav>
          <nav>
          <CiWallet className="menuIcon1" />
          <NavLink to="/Transactions" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Transaction
            </NavLink>
          </nav>
          <nav>
          <MdPeopleAlt className="menuIcon1" />
            <NavLink to="/View-Tenant" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Tenants
           </NavLink>
          </nav>
          <nav>
            <CiStar className="menuIcon1" />
            <NavLink to="/Maintenance" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
            Maintenance
            </NavLink>
          </nav>
          <nav>
          <FaTools className="menuIcon1" />
            <NavLink to="/settings" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
              Account Setting
            </NavLink>
          </nav>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default MenuBar;
