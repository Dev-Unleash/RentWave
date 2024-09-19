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
import { Link } from "react-router-dom";
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
          <img src={image} alt="Profile" />
        </div>
        <p>Mr. Johnson</p>
        <h3>Welcome</h3>
      </div>

      <div className="MenuContainer1">
        <div className="MenuWrapper1">
          <nav>
            <IoHome className="menuIcon1" />
            <Link to="/LandLord" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Home
            </Link>
          </nav>
          <nav>
          <GiFamilyHouse className="menuIcon1" />           
            <Link to="/propertics" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
            Properties
            </Link>
          </nav>
          <nav>
          <CiWallet className="menuIcon1" />
          <Link to="/Transactions" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Transaction
            </Link>
          </nav>
          <nav>
          <MdPeopleAlt className="menuIcon1" />
            <Link to="/View-Tenant" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Tenants
           </Link>
          </nav>
          <nav>
            <CiStar className="menuIcon1" />
            <Link to="/Maintenance" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
            Maintenance
            </Link>
          </nav>
          <nav>
          <FaTools className="menuIcon1" />
            <Link to="/settings" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Account Setting
            </Link>
          </nav>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default MenuBar;
