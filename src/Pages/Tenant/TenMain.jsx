

import React, { useState } from "react";
import "./TenMain.css";
import SubImage from "../../assets/download 16.png"; 
import { useNavigate } from "react-router-dom";
import MainRequest from "./MainRequest";

const TenMain = () => {
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const handleRequestClick = () => {
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className={`TenantMainContainer ${showPopup ? "blur-background" : ""}`}>
        <div className="TenantMainContainerHeader">
          <div className="TenantMainContainerright">
            <h3>Maintenance Request</h3>
            <p>Keep track of maintenance requests on RentWave</p>
          </div>
        </div>

        <div className="TenantMainDown">
          <div className="TenantMainDownHeader" >
            <strong>REASON</strong>
            <strong>DATE / TIME CREATED</strong>
            <strong>STATUS</strong>
          </div>
          <div className="TenantMaindowncon">
            <div className="TextMainInage">
              <h3>Oh Snap! there's nothing here</h3>
              <div className="SubImages">
                <img src={SubImage} alt="No maintenance requests" />
              </div>
              <h3 style={{ fontWeight: "400" }}>
                There are no maintenance requests yet on this account
              </h3>
              <button onClick={handleRequestClick}>Create New Request</button>
            </div>
          </div>
        </div>
      </div>

      {showPopup ? <MainRequest closePopup={closePopup} /> : null} 
    </>
  );
};

export default TenMain;
