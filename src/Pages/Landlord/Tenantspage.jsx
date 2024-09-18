import React, { useState } from 'react'
import './Tenantspage.css'
<<<<<<< HEAD
import image from "../../../public/Clip.png"
import InviteTenant from './InviteTenant'
=======
import image from "../../assets/Clip.png"
>>>>>>> 3a0ee0ce391d30b02a0ae03102389ffc51010ed1

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
<<<<<<< HEAD
            <botton onClick={openModal}>Invite Tenants</botton>
=======
            <botton className="btnsLandlord">Invite Tenants</botton>
>>>>>>> 3a0ee0ce391d30b02a0ae03102389ffc51010ed1
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
