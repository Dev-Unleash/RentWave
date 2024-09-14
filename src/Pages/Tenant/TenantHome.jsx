import React from "react";
import "./TenantHome.css";
import homepics from "../../assets/download 12.png"
const TenantHome = () => {
  return (
    <div className="TenantHome">
      <div>
        <h1>OverView</h1>
        <p >Here’s a quick Overview of what’s happening</p>
      </div>
      <div className="TenantDashBoardBox">
        <div className="OneBox">
          <h1>Spaced Booked</h1>
          <div className="TenantText">
            <h3>0</h3>
            <p>Sell All</p>
          </div>
        </div>
        <div className="OneBox" >
          <h1>Maintenance Request</h1>
          <div className="TenantText">
            <h3 >0</h3>
            <p>Sell All</p>
          </div>
        </div>
        <div className="OneBox">
           <h1>Active Subcription</h1>
           <div className="TenantText">
            <h3>0</h3>
            <p>Sell All</p>
          </div>
        </div>
      </div>

      <div className="TenantRecentActivity" >
        <h1>
          Recent Activity
        </h1>
        <div className="TextImage">
        <div className="HomeImage" >
                <img src={homepics} alt=""/>
            </div>
            <h3>No activities yet but recent scheduled and completed payments will appear here</h3>
        </div>
           
       
      </div>
    </div>

  );
};

export default TenantHome;
