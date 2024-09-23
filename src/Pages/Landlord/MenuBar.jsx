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

  const menuItems = [
    { to: '/LandLord', icon: <IoHome />, label: 'Home', key: 'home' },
    { to: '/propertics', icon: <GiFamilyHouse />, label: 'Properties', key: 'properties' },
    { to: '/Transactions', icon: <CiWallet />, label: 'Transactions', key: 'transactions' },
    { to: '/View-Tenant', icon: <MdPeopleAlt />, label: 'Tenants', key: 'tenants' },
    { to: '/Maintenance', icon: <GrHostMaintenance />, label: 'Maintenance', key: 'maintenance' },
    { to: '/settings', icon: <FaTools />, label: 'Account Settings', key: 'settings' },
  ];

  const handleIconClick = (key) => {
    if (activeIcon !== key) {
      setActiveIcon(key);
    }
  };

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
            {menuItems.map(({ to, icon, label, key }) => (
              <nav key={key}>
                <NavLink to={to} onClick={() => handleIconClick(key)} className='active-link'>
                  {label}
                </NavLink>
                <Link className="menuside" to={to}>
                  {React.cloneElement(icon, {
                    onClick: () => handleIconClick(key),
                    color: activeIcon === key ? 'royalblue' : 'black',
                    className: "menuIcon1",
                  })}
                </Link>
              </nav>
            ))}
          </div>
        </div>

        <div className="Logoutmenu">
          <nav style={{ gap: "20px", display: "flex" }} onClick={handleLogoutClick}>
            <p style={{ fontSize: "25px", color: "black", cursor: "pointer" }}>
              Logout
            </p>
            <AiOutlineLogout className="menuIcon1" />
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
