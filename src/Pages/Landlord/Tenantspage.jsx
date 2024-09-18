import React, { useState } from 'react'
import './Tenantspage.css'
import InviteTenant from './InviteTenant'
import image from "../../assets/Clip.png"

const Tenantspage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = () => alert('Submitted!');

  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Tenants</p>
          <input type="search" placeholder='Search' />
        </div>
        <div className="btnes">
            <p>View your tenants</p>
            <botton onClick={openModal}>Invite Tenants</botton>
        </div>
        <div className="table">
          <img src={image} alt="" />
          <p>No renters yet but renter details and status will appear here.</p>
        </div>
      </div>
      <InviteTenant 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={handleSubmit} 
       />
    </div>
  )
}

export default Tenantspage
