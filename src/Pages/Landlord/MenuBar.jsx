import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
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
  const userData = JSON.parse(userInfo);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);


  // const toggleActive = (icon) => {
  //   setActiveStates((prevStates) => ({
  //     ...prevStates,
  //     [icon]: !prevStates[icon], // Toggles only the clicked icon's state
  //   }));
  // };


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
  console.log("User Profile: ", userInfo);

  // const name = `${userInfo?.firstName} ${userInfo?.lastName}`
  const name = `${userInfo?.firstName || "N/A"} ${userInfo?.lastName || "N/A"}`

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
                // Safely access the profile picture URL or fallback to a default image
                src={
                  userInfo?.profilePicture?.pictureUrl || "fallback-image-url"
                }
                alt="Profile"
              />
            </Link>
          </div>
          <p>{name || "Unknown User"}</p> {/* Safely access firstName */}
          <h3>Welcome</h3>
        </div>

        <div className="MenuContainer1">
          <div className="MenuWrapper1">
            <nav>
            <Link className="menuside" to='/LandLord'>  <IoHome onClick={() => setActiveIcon("home")} 
                  color={activeIcon === "home" ? 'royalblue' : 'black'}  className="menuIcon1"  /></Link>
              <NavLink to="/LandLord"  onClick={() => setActiveIcon("home")} 
                  className='active-link'>
                Home
              </NavLink>
            </nav>
            <nav>
            <Link className="menuside" to='/propertics'>  <GiFamilyHouse onClick={() => setActiveIcon("properties")} 
            color={activeIcon === "properties" ? 'royalblue' : 'black'}  className="menuIcon1"  /></Link>
              <NavLink to="/propertics"  onClick={() => setActiveIcon("properties")} 
           className='active-link'>
                Properties
              </NavLink>
            </nav>
            <nav>
             <Link className="menuside" to='/Transactions'> <CiWallet onClick={() => setActiveIcon("transactions")} 
                  color={activeIcon === "transactions" ? 'royalblue' : 'black'}   className="menuIcon1"   /></Link>
              <NavLink to="/Transactions"onClick={() => setActiveIcon("transactions")} 
                  className='active-link'>
                Transactions
              </NavLink>
            </nav>
            <nav>
            <Link className="menuside" to='/View-Tenant'>   <MdPeopleAlt  onClick={() => setActiveIcon("tenants")} 
                  color={activeIcon === "tenants" ? 'royalblue' : 'black'}   className="menuIcon1"   /></Link>
              <NavLink to="/View-Tenant"onClick={() => setActiveIcon("tenants")}className='active-link'>
                Tenants
              </NavLink>
            </nav>
            <nav>
            <Link className="menuside" to='/Maintenance'>   <GrHostMaintenance onClick={() => setActiveIcon("maintenance")} 
                  color={activeIcon === "maintenance" ? 'royalblue' : 'black'}   className="menuIcon1" /></Link>           
              <NavLink to="/Maintenance" onClick={() => setActiveIcon("maintenance")} className='active-link'>
                Maintenance
              </NavLink>
            </nav>
            <nav>
            <Link className="menuside" to='/settings'>   <FaTools  onClick={() => setActiveIcon("settings")} 
                  color={activeIcon === "settings" ? 'royalblue' : 'black'}  className="menuIcon1"   /></Link>           
              <NavLink to="/settings" onClick={() => setActiveIcon("settings")} className='active-link'>
                Account Settings
              </NavLink>
            </nav>
          </div>
        </div>

        <div className="Logoutmenu">
          <nav style={{ gap: "20px", display: "flex" }} onClick={handleLogoutClick}>
            <AiOutlineLogout className="menuIcon1" />
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

export default MenuBar