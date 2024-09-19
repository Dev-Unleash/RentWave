import React, { useState } from 'react'
import './Propertics.css'
import image from "../../assets/Group (1).png"
import { RiAddFill, RiSearchLine } from 'react-icons/ri'
import AddProperty from './addProperty.jsx'

const Propertics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = () => alert('Submitted!');
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>My Portfolio</p>
          <div className='input'>
            <RiSearchLine  className='icon'/>
            <input type="search" placeholder='Search' className='put'/>
          </div>
        </div>
        <div className="btnsLandlord">
          <botton className='btnsLand' onClick={openModal}><RiAddFill className='icon'/>Add property</botton>
        </div>
        <div className="table">
          <img src={image} alt="" />
          <p>No properties yet but properties for this portfolio will be listed <br/> here.</p>
        </div>
      </div>

      <AddProperty 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={handleSubmit}
      />
      
    </div>
  )
}

export default Propertics
