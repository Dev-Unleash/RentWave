import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import "./MenuBar.css";
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

  // Handle Logout Click Popup
  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  // Handle Logout Confirmation
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

  // Handle Logout Cancel
  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  // Redirect if user is not logged in
  useEffect(() => {
    if (!userData) {
      nav("/");
    }
  }, [userData, nav]);

  // Fetch the landlord's profile data from localStorage
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));

  // Debugging: log out the userProfile object to check its structure
  console.log("User Profile: ", userProfile);

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
              <img
                // Safely access the profile picture URL or fallback to a default image
                src={
                  userProfile?.landlord?.profilePicture?.pictureUrl || "fallback-image-url"
                }
                alt="Profile"
              />
            </Link>
          </div>
          <p>{userProfile?.landlord?.firstName || "Unknown User"}</p> {/* Safely access firstName */}
          <h3>Welcome</h3>
        </div>

        <div className="MenuContainer1">
          <div className="MenuWrapper1">
            <nav>
              <IoHome className="menuIcon1" />
              <NavLink to="/LandLord" className={({ isActive }) => isActive ? "active-link" : ""}>
                Home
              </NavLink>
            </nav>
            <nav>
              <GiFamilyHouse className="menuIcon1" />
              <NavLink to="/propertics" className={({ isActive }) => isActive ? "active-link" : ""}>
                Properties
              </NavLink>
            </nav>
            <nav>
              <CiWallet className="menuIcon1" />
              <NavLink to="/Transactions" className={({ isActive }) => isActive ? "active-link" : ""}>
                Transactions
              </NavLink>
            </nav>
            <nav>
              <MdPeopleAlt className="menuIcon1" />
              <NavLink to="/View-Tenant" className={({ isActive }) => isActive ? "active-link" : ""}>
                Tenants
              </NavLink>
            </nav>
            <nav>
              <CiStar className="menuIcon1" />
              <NavLink to="/Maintenance" className={({ isActive }) => isActive ? "active-link" : ""}>
                Maintenance
              </NavLink>
            </nav>
            <nav>
              <FaTools className="menuIcon1" />
              <NavLink to="/settings" className={({ isActive }) => isActive ? "active-link" : ""}>
                Account Settings
              </NavLink>
            </nav>
          </div>
        </div>

        <div className="Logoutmenu">
          <nav style={{ gap: "20px", display: "flex" }} onClick={handleLogoutClick}>
            <AiOutlineLogout className="menuIcon" />
            <p style={{ fontSize: "25px", color: "black", cursor: "pointer" }}>
              Logout
            </p>
          </nav>

          {showLogoutPopup && (
            <div className="popup">
              <p style={{ color: "white", textAlign: "center" }}>Are you sure?</p>
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
