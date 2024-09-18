import React from 'react'
import './Tenantspage.css'
import image from "../../../public/Group (1).png"

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
          <p>No properties yet but properties for this portfolio will be listed <br/> here.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Tenantspage
