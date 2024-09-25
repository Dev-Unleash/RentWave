import React, { useEffect, useState } from "react";
import { CiStar, CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./Tenant.css";
import { FaRegUserCircle } from "react-icons/fa";

const SideBar = () => {
  const nav = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [tenant, setTenant] = useState(null);

  const tenantData = JSON.parse(localStorage.getItem("userInfo"));
  const tenantId = tenantData?._id;

  useEffect(() => {
    const fetchTenant = async () => {
      if (!tenantId) {
        console.error("No tenant ID found");
        return;
      }

      const url = `https://rentwave.onrender.com/api/v1/tenant/${tenantId}`;
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await axios.get(url, config);
        setTenant(res.data); // You could use this tenant state somewhere if needed
      } catch (error) {
        console.error("Error fetching tenant data:", error.response?.data?.message || error.message);
      }
    };

    fetchTenant();
  }, [tenantId]);

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
      localStorage.removeItem("userProfile");
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
              {tenantData?.profilePicture?.pictureUrl ? (
                <img src={tenantData?.profilePicture.pictureUrl} alt="Profile" />
              ) : (
                <FaRegUserCircle size={50} />
              )}
            </Link>
          </div>

          <p>{tenantData ? `${tenantData?.firstName} ${tenantData?.lastName}` : ""}</p>
          <h3>Welcome</h3>
        </div>

        <div className="MenuContainer">
          <div className="MenuWrapper">
            <nav>
              <IoHome className="menuIcon" />
              <NavLink to="/TenantHome" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </nav>
            <nav>
              <CiStar className="menuIcon" />
              <NavLink to="/TenantMain" className={({ isActive }) => (isActive ? "active" : "")}>
                Maintenance
              </NavLink>
            </nav>
            <nav>
              <CiWallet className="menuIcon" />
              <NavLink to="/TenantPayment" className={({ isActive }) => (isActive ? "active" : "")}>
                Payment
              </NavLink>
            </nav>
            <nav>
              <CiStar className="menuIcon" />
              <NavLink to="/TenantSettings" className={({ isActive }) => (isActive ? "active" : "")}>
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
              <p style={{ color: "white", width: "100%", display: "flex", justifyContent: "center" }}>
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

export default SideBar;
