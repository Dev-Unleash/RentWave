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
          <h1>Payment</h1>
          <div className="TenantText">
            <h3>0</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox" >
          <h1>Maintenance Request</h1>
          <div className="TenantText">
            <h3 >0</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox">
           <h1>Active Subcription</h1>
           <div className="TenantText">
            <h3>0</h3>
            <p>See All</p>
          </div>
        </div>
      </div>

      <div className="TenantRecentActivity" >
        <h1>
          Recent Activity
        </h1>
        {/* <div className="TextImage">
        <div className="HomeImage" >
                <img src={homepics} alt=""/>
            </div>
            <h3>No activities yet but recent scheduled and completed payments will appear here</h3>
        </div> */}
           {/* <div className="RecentActPage">
           
            
            <div className="RecentActbox">
              <div className="RecentActboxleft">
                <p>Payment</p>
              </div>
              <div className="RecentActboxright">
                <p>#180000</p>
                <p>11/12/2005</p>
                <p>13:45pm</p>
              </div>
            </div>
            <div className="RecentActbox">
              <div className="RecentActboxleft">
                <p>Payment</p>
              </div>
              <div className="RecentActboxright">
                <p>#180000</p>
                <p>11/12/2005</p>
                <p>13:45pm</p>
              </div>
            </div>
           </div> */}
       <table className="RecentActPage">
       <tbody >
           <tr>
          <td>Payment</td>
        <td>#180000</td>
        <td>11/12/2005</td>
        <td>13:45pm</td>
    </tr>
    <tr>
          <td>Payment</td>
        <td>#180000</td>
        <td>11/12/2005</td>
        <td>13:45pm</td>
    </tr>
    <tr>
          <td>Payment</td>
        <td>#180000</td>
        <td>11/12/2005</td>
        <td>13:45pm</td>
    </tr>
           </tbody>
       </table>
      </div>
    </div>

  );
};

export default TenantHome;
