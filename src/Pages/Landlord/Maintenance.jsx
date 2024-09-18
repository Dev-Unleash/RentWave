import React from 'react'
import './Landlord.css'
import './Maintenance.css'
import image from '../../assets/download 16.png'

const Maintenance = () => {
  return (
    <div className='Pages'>
      <div className="Maintainontainer">
        <div className="headup">
        <h4>Maintenance Request</h4>
        <p>Keep track of maintenance requests on RentWave</p>
        </div>
        <div className="thebox">
          <div className="theboxheader">
            <div className="left">
              <p>REASON</p>
            </div>
            <div className="right">
              <p>DATE / TIME CREATED</p>
              <p>STATUS</p>
            </div>
          </div>
          <div className="inside">
            <h4>Oh snap! there’s nothing here</h4>
            <img src={image} alt="" />
            <p>There are no maintenance request yet on this account</p>
            </div>
        </div>        
      </div>

    </div>
  )
}

export default Maintenance
