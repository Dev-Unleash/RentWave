import React, { useState } from "react";
import "./TenMain.css";
import SubImage from "../../assets/download 16.png";
import { useNavigate } from "react-router-dom";
import MainRequest from "./MainRequest";

const TenMain = ({ showPopup, setShowPopup,  }) => {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div
        className={`TenantMainContainer ${showPopup ? "blur-background" : ""}`}
      >
        <div className="TenantMainContainerHeader">
          <div className="TenantMainContainerright">
            <h3>Maintenance Request</h3>
            <p>Keep track of maintenance requests on RentWave</p>
          </div>
        </div>

        <div className="TenantMainDown">
          <div className="TenantMainDownHeader">
            <strong>REASON</strong>
            <strong>DATE / TIME CREATED</strong>
            <strong>STATUS</strong>
          </div>
          <div className="TenantMaindowncon">
            <div className="TenantMainbox">
              <p>Burst pipe</p>
              <p>
                15/08/2024
                <p>13:59pm</p>
              </p>
              <p>sent</p>
            </div>
          </div>
          {/* <div className="TenantMaindowncon">
            <div className="TextMainInage">
              <h3>Oh Snap! there's nothing here</h3>
              <div className="SubImages">
                <img src={SubImage} alt="No maintenance requests" />
              </div>
              <h3 style={{ fontWeight: "400" }}>
                There are no maintenance requests yet on this account
              </h3>
              
            </div>
          </div> */}
          <div className="TextMainInage">
            <button onClick={handleRequestClick}>Create New Request</button>
          </div>
        </div>
      </div>

      {showPopup ? (
        <MainRequest closePopup={() => setShowPopup(false)} />
      ) : null}
    </>
  );
};

export default TenMain;
