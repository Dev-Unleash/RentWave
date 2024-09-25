import React, { useEffect, useState } from "react";
import { CiWallet } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GrHostMaintenance } from "react-icons/gr";
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
  const userData = userInfo ? JSON.parse(userInfo) : null;
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

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

  return (
    <>
      <div className="Sidebarwhole1">
        <Link to="/">
          <div className="LogoContainer1">
            <div className="Logolandlord">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </Link>

        <div className="Profile1">
          <div className="Pics1">
            <Link to="/profile">
              <img
                src={userData?.profilePicture?.pictureUrl || "fallback-image-url"}
                alt="Profile"
              />
            </Link>
          </div>
          <p>{`${userData?.firstName || "N/A"} ${userData?.lastName || "N/A"}`}</p>
          <h3>Welcome</h3>
        </div>

        <div className="MenuContainer1">
          <div className="MenuWrapper1">
            <NavLink to="/LandLord" onClick={() => setActiveIcon('home')} className={`menu-item ${activeIcon === 'home' ? 'active' : ''}`}>
              <nav className="menu-nav">
                <IoHome className="menuIcon1" />
                <span>Home</span>
              </nav>
            </NavLink>

            <NavLink to="/propertics" onClick={() => setActiveIcon('properties')} className={`menu-item ${activeIcon === 'properties' ? 'active' : ''}`}>
              <nav className="menu-nav">
                <GiFamilyHouse className="menuIcon1" />
                <span>Properties</span>
              </nav>
            </NavLink>

            <NavLink to="/Transactions" onClick={() => setActiveIcon('transactions')} className={`menu-item ${activeIcon === 'transactions' ? 'active' : ''}`}>
              <nav className="menu-nav">
                <CiWallet className="menuIcon1" />
                <span>Transactions</span>
              </nav>
            </NavLink>

            <NavLink to="/View-Tenant" onClick={() => setActiveIcon('tenants')} className={`menu-item ${activeIcon === 'tenants' ? 'active' : ''}`}>
              <nav className="menu-nav">
                <MdPeopleAlt className="menuIcon1" />
                <span>Tenants</span>
              </nav>
            </NavLink>

            <NavLink to="/Maintenance" onClick={() => setActiveIcon('maintenance')} className={`menu-item ${activeIcon === 'maintenance' ? 'active' : ''}`}>
              <nav className="menu-nav">
                <GrHostMaintenance className="menuIcon1" />
                <span>Maintenance</span>
              </nav>
            </NavLink>

            <NavLink to="/settings" onClick={() => setActiveIcon('settings')} className={`menu-item ${activeIcon === 'settings' ? 'active' : ''}`}>
              <nav className="menu-nav">
                <FaTools className="menuIcon1" />
                <span>Account Settings</span>
              </nav>
            </NavLink>
          </div>
        </div>

        <div className="Logoutmenu1">
          <nav style={{ gap: "20px", display: "flex" }} onClick={handleLogoutClick}>
            <AiOutlineLogout className="menuIcon1" />
            <p style={{ fontSize: "25px", color: "black", cursor: "pointer" }}>Logout</p>
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
