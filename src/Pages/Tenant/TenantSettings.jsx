import React from 'react'
import "./Tenantsettings.css"
import { MdCircleNotifications } from "react-icons/md";
const TenantSettings = () => {
  return (
    <div className='TenantSettingsContainer'>
      <div className="TenantSettingsContainerHeader">
      
           <div className="TenantSettingsContainerright">
           <h3>Payment </h3>
           <p>Manage payment on RentWave</p>
           </div>
           <div className="TenantSettingsContainerLeft">
           {/* <MdCircleNotifications size={10}/> */}
           </div>
      </div>
      <div className="TenantSettingsDown">
    <div className="TenantSettingsDownHeader">
      <ul>
        <li>Cards </li>
        <li>Payment History</li>
      </ul>
     
    </div>
      </div>
    </div>
  )
}

export default TenantSettings