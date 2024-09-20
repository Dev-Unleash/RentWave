import React from "react";
import './LandLordHome.css'
import homepics from "../../assets/download 12.png"
const LandLordHome = () => {
  const data = [
    { name: "John ade", dateRegistered: "2023-09-01", status: "Active", role: "Tenant" },
    { name: "Jane falade", dateRegistered: "2023-08-15", status: "Inactive", role: "Landlord" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Admin" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Tenant" },
    { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Landlord" }
  ];
  return (
    <div className="LandLordHome">
      <div>
        <h1>OverView</h1>
        <p >Here’s a quick Overview of what’s happening</p>
      </div>
      <div className="TenantDashBoardBox">
        <div className="OneBox2">
          <h5 className="pin"></h5>
          <div className="pins"></div>
          <h1>Property listed</h1>
          <div className="TenantText">
            <h3>0</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox2" >
        <h5 className="pin"></h5>
        <div className="pins"></div>
          <h1>Tenants</h1>
          <div className="TenantText">
            <h3 >0</h3>
            <p>See All</p>
          </div>
        </div>
        <div className="OneBox2">
        <h5 className="pin"></h5>
        <div className="pins"></div>
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
            {/* <div className="HomeImage" >
                <img src={homepics} alt=""/>
            </div>
            <h3>No activities yet but recent scheduled and completed payments will appear here</h3> */}
             <table>
        <thead>
          {/* <tr>
            <th>Name</th>
            <th>Date Registered</th>
            <th>Status</th>
            <th>Role</th> 
          </tr> */}
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.dateRegistered}</td>
              <td>{item.status}</td>
              <td>{item.role}</td> 
            </tr>
          ))}
        </tbody>
      </table>
        </div>
           
       
      </div>
    </div>

  );
};

export default LandLordHome;
