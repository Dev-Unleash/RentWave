import React from 'react'
import TenPay from "../../assets/payment 1.png"
import "./AdminTenant.css"
import { IoNotificationsCircleSharp } from "react-icons/io5";

const TenantPayHero = () => {
  return (
  
        <>
        <div className="TenantPayContainerHeader">
        
             <div className="TenantPayContainerright">
             <h3>Payment </h3>
             <p>Manage payment on RentWave</p>
             </div>
             <div className="TenantPayContainerLeft">
             <IoNotificationsCircleSharp className="menuIcons"/>
             </div>
        </div>
      
        </>
  )
}

export default TenantPayHero