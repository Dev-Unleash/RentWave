// import React from 'react'
// import './Landlord.css'

// const MenuBar = () => {
//   return (
//     <div className='MenuBar'>
      
//     </div>
//   )
// }

// export default MenuBar





import React, { useEffect, useState } from "react";
import image from "../../assets/Frame 775.png";
import { CiStar } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import "./MenuBar.css";
import Logout from "./Logout";
import { GiFamilyHouse } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";

const MenuBar = () => {
  const nav = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const userData = JSON.parse(userInfo);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleLogoutConfirm = async () => {
    const url = "https://rentwave.onrender.com/api/v1/logout";
    const token = localStorage.getItem("userToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(url, {}, config);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      toast.success("Logout successful");
      nav("/");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    } finally {
      setShowLogoutPopup(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  useEffect(() => {
    if (!userData) {
      nav("/");
    }
  }, [userData, nav]);

  const userName = JSON.parse(localStorage.getItem("userProfile"));


  return (
    <>
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
          <img src={ localStorage.getItem("userProfile")
                    ? JSON.parse(localStorage.getItem("userProfile")).tenant
                        .profilePicture.pictureUrl
                    : ""} 
                    alt="Profile" />
        </Link>
        </div>
        <p>{userName?.landlord?.firstName}</p>
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
      <div className="Logoutmenu">
          <nav
            style={{ gap: "20px", display: "flex" }}
            onClick={handleLogoutClick}
          >
            <AiOutlineLogout className="menuIcon" />
            <p
              style={{
                fontSize: "25px",
                color: "black",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Logout
            </p>
          </nav>

          {showLogoutPopup && (
            <div className="popup">
              <p
                style={{
                  color: "white",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Are you sure?
              </p>
              <div className="popup-text">
                <p onClick={handleLogoutConfirm}>Yes</p>
                <p onClick={handleLogoutCancel}>No</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </>    
  );
};

export default MenuBar;
