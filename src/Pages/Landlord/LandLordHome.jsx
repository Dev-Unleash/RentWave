import React from "react";
import './LandLordHome.css'
import homepics from "../../assets/download 12.png"
const LandLordHome = () => {
  return (
    <div className="LandLordHome">
      <div>
        <h1>OverView</h1>
        <p >Here’s a quick Overview of what’s happening</p>
      </div>
      <div className="TenantDashBoardBox">
        <div className="OneBox">
          <h1>Property listed</h1>
          <div className="TenantText">
            <h3>0</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox" >
          <h1>Tenants</h1>
          <div className="TenantText">
            <h3 >0</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox">
           <h1>EARNINGS</h1>
           <div className="TenantText">
            <h3 className="h3">₦0.00</h3>
            This month
            <p>See All</p>
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

export default LandLordHome;
