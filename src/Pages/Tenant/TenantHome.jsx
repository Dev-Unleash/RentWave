import React from 'react'
import "./TenantHome.css"
const TenantHome = () => {
  return (
    <div className='TenantHome'>
            <h3>OverView
                <p>Here’s a quick overview of what’s happening</p>
            </h3>
            <div className="TenantDashBoardBox">
                <div className="OneBox">
                    <h1>Spaced Booked</h1>
                    <h3>0</h3>
                    <p>Sell All</p>
                </div>
                <div className="OneBox">
                    <h1>Maintenance Request</h1>
                    <h3>0</h3>
                    <p>Sell All</p>
                </div>
                <div className="OneBox">
                    <h1>Active Subcription</h1>
                    <h3>0</h3>
                    <p>Sell All</p>
                </div>
            </div>
            <div className="TenantRecentActivity">
                <h4>Recent Activity</h4>
                <hr />
                <div className="TenantRecentActivityDown">

                </div>
            </div>
    </div>
  )
}

export default TenantHome