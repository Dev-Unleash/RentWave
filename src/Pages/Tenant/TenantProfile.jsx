import React, { useEffect } from "react";
import "./TenantProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";

const TenantProfile = () => {
  const navigate = useNavigate();
  
  const handleClose = () => {
    navigate(-1);
  };

  const tenantData = JSON.parse(localStorage.getItem("userProfile"))?.tenant;
  const userProfile = localStorage.getItem("userProfile");
  const userToken = localStorage.getItem("userToken");
  const userProflie = localStorage.getItem("userProfile");
  const userName = JSON.parse(userProflie);
  const tenantId = userName?._id;
  const userData = JSON.parse(userProfile);
  console.log(userData)

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
        const data = res.data;
        console.log("Tenant Data:", data);
        setTenant(data); // Store the tenant data in state
      } catch (error) {
        console.error("Error fetching tenant data:", error.response?.data?.message || error.message);
      }
    };

    fetchTenant();
  }, [tenantId]);


  return (
    <div className="TenantProfilePage">
      <div className="TenantProfilePageWrapper">
        <div className="ProfileHeader">
          <h3 className="CloseButtonPro" onClick={handleClose}>
            <IoArrowBack style={{ height: "45px", width: "50px" }} /> Back
          </h3>
          <h3 style={{ width: "20%" }}>Profile</h3>
          <Link
            to="/TenantSettings"
            style={{ width: "20%", justifyContent: "flex-end" }}
          >
            <button>Edit</button>
          </Link>
        </div>
        <div className="Profilepic">
          <div className="Pics" style={{ cursor: "pointer" }}>
            {/* If profilePicture is available, display it; otherwise, show a default image */}
            {/* {localStorage.getItem("userProfile") && JSON.parse(localStorage.getItem("userProfile")).tenant.profilePicture?.pictureUrl ? ( */}
            {userName?.tenant.profilePicture?.pictureUrl ? (
                <img src={userName?.tenant.profilePicture.pictureUrl} alt="Profile" />
              ) : (
                <FaRegUserCircle size={50} />
              )}
          </div>
        </div>
        <div className="ProfDetail">
          <ul>
            <li>
              <h3>Name:</h3>
              <span>{`${tenantData?.firstName || userData.firstName} ${
                tenantData?.lastName || userData.lastName
              }`}</span>
            </li>
            <li>
              <h3>Email address:</h3>
              <span className="email">{tenantData?.email || userData.email}</span>
            </li>
            <li>
              <h3>Phone number:</h3>
              <span>{tenantData?.phoneNumber || userData.phoneNumber}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TenantProfile;

