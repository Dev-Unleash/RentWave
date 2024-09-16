import React from 'react'
import "./AdminLandlord.css"
// import TenantPayment from './TenantPayment'
// import TenantPayHero from './TenantPayHero'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";
const AdminPayment = () => {

  const data = [
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
  ]
  return (
<div className="AdminLandlordContainer">
      <h4>Payment Track</h4>
      <div className="AdminLandlord">
      <table>
        <thead>
          <tr>
            <th className='name-column'>Name</th>
            <th className='name-column1'>Amount</th>
            <th className='name-column1'>Date</th>
            <th className='name-column1'>Status</th> 
            <th className='name-column2'>Time</th>
           
      
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='name-column'>{item.name}</td>
              <td className='name-column1'>{item.Amount}</td>
              <td className='name-column1'>{item.date}</td>
              <td className='name-column1'>{item.status}</td>
              <td className='name-column1'>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
       
      </div>
      {/* <Outlet/> */}
        </div>


   
  )
}

export default AdminPayment