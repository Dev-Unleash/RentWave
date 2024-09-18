import React from 'react'
import './Tenantspage.css'
import image from "../../assets/Clip.png"

const Tenantspage = () => {
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Tenants</p>
          <input type="search" placeholder='Search' />
        </div>
        <div className="btnes">
            <p>View your tenants</p>
            <botton>Invite Tenants</botton>
          </div>
        <div className="table">
          <img src={image} alt="" />
          <p>No renters yet but renter details and status will appear here.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Tenantspage
