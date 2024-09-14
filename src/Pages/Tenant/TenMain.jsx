import React from "react";
import "./TenMain.css";
import SubImage from "../../assets/download 16.png"
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const TenMain = () => {
  const navigate = useNavigate();
  return (
    <div className="TenantMainContainer">
      <div className="TenantMainContainerHeader">
        <div className="TenantMainContainerright">
          <h3>Maintenance Request</h3>
          <p>Keep track of maintenance requests on RentWave</p>
        </div>
     
      </div>

      <div className="TenantMainDown">
        <div className="TenantMainDownHeader">
          <strong>REASON</strong>
          <strong>TICKET ID</strong>
          <strong>DATE / TIME CREATED</strong>
          <strong>STATUS</strong>
          <strong>ACTIONS</strong>
        </div>
        <div className="TenantMaindowncon">
          <div className="TextMainInage">
          <h3>Oh Snap! there's nothing here</h3>
            <div className="SubImages">
        <img src={SubImage} alt="" />
    </div>
    <h3  style={{fontWeight:"400"}}>There are no maintenance request yet on this account</h3>
        <button onClick={() => navigate("/MaintainReq")}>Create New Request</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TenMain;
