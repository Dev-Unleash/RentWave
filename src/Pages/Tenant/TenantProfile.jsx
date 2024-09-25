import React, { useEffect, useState } from "react";
import "./TenantProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";

const TenantProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("userInfo"));
    if (userProfile?.tenant) {
      setFirstName(userProfile.tenant.firstName);
      setLastName(userProfile.tenant.lastName);
      setPhoneNumber(userProfile.tenant.phoneNumber);
    }
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem("userToken");
    const url = "https://rentwave.onrender.com/api/v1/updateprofile";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = { firstName, lastName, phoneNumber };

    try {
      const res = await axios.put(url, body, config);
      const updatedTenant = res.data.tenant;

      // Update local storage with new tenant data
      const updatedProfile = JSON.parse(localStorage.getItem("userInfo"));
      updatedProfile.tenant = { ...updatedProfile.tenant, ...updatedTenant };
      localStorage.setItem("userInfo", JSON.stringify(updatedProfile));

      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const tenantData = JSON.parse(localStorage.getItem("userInfo"))

  return (
    <div className="TenantProfilePage">
      <div className="TenantProfilePageWrapper">
        <div className="ProfileHeader">
          <h3 className="CloseButtonPro" onClick={() => navigate(-1)}>
            <IoArrowBack style={{ height: "45px", width: "50px" }} /> Back
          </h3>
          <h3 style={{ width: "20%" }}>Profile</h3>
          <Link to="/TenantSettings" style={{ width: "20%", justifyContent: "flex-end" }}>
            <button>Edit</button>
          </Link>
        </div>
        <div className="Profilepic">
          <div className="Pics" style={{ cursor: "pointer" }}>
            {!tenantData.profilePicture.pictureUrl ? (<FaRegUserCircle size={50} />) :
            (<img src={tenantData?.profilePicture?.pictureUrl} alt="" />)}
          </div>
        </div>
        <div className="ProfDetail1">
          <ul>
            <li className="listDetail">
              <h3>Name:   <span>{`${tenantData.firstName} ${tenantData.lastName}`}</span></h3>
             
            </li>
            <li className="listDetail">
              <h3>Email address:   <span className="email3">{tenantData.email}</span></h3>
             
            </li>
            <li className="listDetail">
              <h3>Phone number:   <span>{tenantData.phoneNumber}</span></h3>
             
            </li>
          </ul>
        </div>
        {/* Uncomment if you want to allow manual updates directly from this page */}
        {/* <button onClick={handleUpdate}>Update Profile</button> */}
      </div>
    </div>
  );
};

export default TenantProfile;
