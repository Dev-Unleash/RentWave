import React from "react";
import "./TenantHome.css";
import homepics from "../../assets/download 12.png"
const TenantHome = () => {
  const data = [
    { Type:"payment", Amount: "₦1000000" ,Date:"2023-09-01" , time:"2:45pm" },
    { Type:"payment", Amount: "₦1000000" ,Date:"2023-09-01" ,time:"2:45pm" },
    { Type:"payment", Amount: "₦1000000" ,Date:"2023-09-01" , time:"2:45pm" },
    { Type:"payment", Amount: "₦1000000" ,Date:"2023-09-01" , time:"2:45pm" },
    { Type:"payment", Amount: "₦1000000" ,Date:"2023-09-01", time:"2:45pm" },
  ]
 
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
           <div  className="RecentActPage">
       <table>
       <tbody >
        {
          data.map((item,index)=>(
            <tr key={index}>
            <td className="actColumn1">{item.Type}</td>
          <td className="actColumn" >{item.Amount}</td>
          <td className="actColumn">{item.Date}</td>
          <td className="actColumn">{item.time}</td>
      </tr>
          ))
        }
  
           </tbody>
       </table>
       </div>
      </div>
    </div>
  // <div className="TenantPayHis">
  // <table>
  //   <thead>
  //     <tr>
  //       <th className='AColumn2'>Date</th>
  //       <th className='AColumn2'>Amount</th>
  //       <th className='AColumn2'>Payment Method</th>
  //       <th className='AColumn2'>Time</th>
  //       <th className='AColumn2'>Status</th> 
  
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {data.map((item, index) => (
  //       <tr key={index}>
  //         <td className='AColumn2'>{item.Date}</td>
  //         <td className='AColumn2'>{item.Amount}</td>
  //         <td className='AColumn2'>{item.PaymentMethod}</td>
  //         <td className='AColumn2'>{item.time}</td>
  //         <td className='AColumn2'>{item.status}</td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table>
   
  // </div>
  );
};

export default TenantHome;
