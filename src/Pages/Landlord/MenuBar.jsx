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
import ola from "../../assets/ola.jpg";
import { CiStar } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import "./MenuBar.css";

const MenuBar = ({showLogoutPopup,setShowLogoutPopup}) => {
  const nav =useNavigate()
  const handleLogoutClick = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };
  const handleLogoutConfirm = () => {
    nav("/")
  };
  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="Sidebarwhole">
      <Link to="/">
        <div className="LogoContainer">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </Link>

      <div className="Profile">
        <div className="Pics">
          <img src={ola} alt="Profile" />
        </div>
        <p>Tolani</p>
        <h3>Welcome</h3>
      </div>

      <div className="MenuContainer">
        <div className="MenuWrapper">
          <nav>
            <IoHome className="menuIcon" />
            <Link to="/LandLord" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Home
            </Link>
          </nav>
          <nav>
            <CiWallet className="menuIcon" />
            <Link to="/propertics" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
            Properties
            </Link>
          </nav>
          <nav>
            <CiStar className="menuIcon" />
            <Link to="/Transactions" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Transaction
            </Link>
          </nav>
          <nav>
            <CiWallet className="menuIcon" />
            <Link to="/paymentHistory" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Tenants
           </Link>
          </nav>
          <nav>
            <CiStar className="menuIcon" />
            <Link to="/settings" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
            Maintenance
            </Link>
          </nav>
          <nav>
          <FaTools className="menuIcon" />
            <Link to="/settings" style={{ textDecoration: "none", color: "black", display: "flex", alignItems: "center" }}>
              Account Setting
            </Link>
          </nav>
        </div>
      </div>

      <div className="Logoutmenu">
        <nav style={{ gap: "20px", display: "flex" }} onClick={handleLogoutClick}>
          <AiOutlineLogout className="menuIcon" />
          <p style={{ fontSize: "25px", color: "black", display: "flex", alignItems: "center", cursor: "pointer" }}>
            Logout
          </p>
        </nav>

        {showLogoutPopup && (
          <div className="popup">
            <p style={{color:"white",width:"100%",display:"flex",justifyContent:"center"}}>Are you sure?</p>
            <div className="popup-text">
              <p onClick={handleLogoutConfirm}>Yes</p>
              <p onClick={handleLogoutCancel}>No</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
