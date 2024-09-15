import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import "./Tenant.css"
const TenantPrivate = ({showLogoutPopup,setShowLogoutPopup}) => {
  return (
    
      <div className="tenantPage">
        <div className="tenantLeft">
          <SideBar showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup}/>
        </div>
        <div className="tenantRight" >
          <div className="tenantRightWrapper">
            <Outlet /> {/* This will render the nested routes */}
          </div>
        </div>
      </div>
    
    // <>
    // {
    //     tenant == "true"?
    //     <Outlet/>
    //     :<Navigate to={"/Login"}/>
    // }
    // </>
  )
}

export default TenantPrivate