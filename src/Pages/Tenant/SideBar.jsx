import React, { useEffect, useState } from "react";
import ola from "../../assets/ola.jpg";
import { CiStar, CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./Tenant.css";

const SideBar = () => {
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

  return (
    <>
      <div className="Sidebarwhole">
        <Link to="/">
          <div className="LogoContainer">
            <div className="Logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </Link>

        <div className="Profile">
          <div className="Pics" style={{ cursor: "pointer" }}>
            <Link to="/TenantProfile">
              <img src={ola} alt="Profile" />
            </Link>
          </div>
          <p>{userData?.firstName}</p>
          <h3>Welcome</h3>
        </div>

        <div className="MenuContainer">
          <div className="MenuWrapper">
            <nav>
              <IoHome className="menuIcon" />
              <NavLink to="/TenantHome" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
                Home
              </NavLink>
            </nav>
            <nav>
              <CiStar className="menuIcon" />
              <NavLink to="/TenantMain" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
                Maintenance
              </NavLink>
            </nav>
            <nav>
              <CiWallet className="menuIcon" />
              <NavLink to="/TenantPayment" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
                Payment
              </NavLink>
            </nav>
            <nav>
              <CiStar className="menuIcon" />
              <NavLink to="/TenantSettings" style={({ isActive }) => (isActive ? { color: "royalblue" } : { color: "black" })}>
                Account Setting
              </NavLink>
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
              <p style={{ color: "white", width: "100%", display: "flex", justifyContent: "center" }}>Are you sure?</p>
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

export default SideBar;
