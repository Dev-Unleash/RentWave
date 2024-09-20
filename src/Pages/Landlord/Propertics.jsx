import React, { useState } from 'react'
import './Propertics.css'
import image from "../../assets/Group (1).png"
import { RiAddFill, RiSearchLine } from 'react-icons/ri'
import AddProperty from './addProperty.jsx'
import { Link } from 'react-router-dom'

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
        <div className="table3">
          {/* <img src={image} alt="" />
          <p>No properties yet but properties for this portfolio will be listed <br/> here.</p> */}
          <div className='propertiesCard'><Link to='/PropertyView1' style={{color:'black'}}><h6>Property Name: <span>Vcg Estate</span></h6></Link> 
          <h6>Location: <span>Lekki</span></h6>
          <h6>Property Type: <span>office space</span></h6>
          <button className='propertyDel'>Delete</button>

          </div>
          <div className='propertiesCard'><h6>Property Name: <span>Boamt Nest</span></h6> 
          <h6>Location: <span>Lekki</span></h6>
          <h6>Property Type: <span>condo</span></h6>
          <button className='propertyDel'>Delete</button>

          </div>
          <div className='propertiesCard'><h6>Property Name: <span>Danish haven</span></h6> 
          <h6>Location: <span>Lekki</span></h6>
          <h6>Property Type: <span>flat</span></h6>
          <button className='propertyDel'>Delete</button>

          </div>
          <div className='propertiesCard'><h6>Property Name: <span>Bay Veiw</span></h6> 
          <h6>Location: <span>Lekki</span></h6>
          <h6>Property Type: <span>apartment</span></h6>
          <button className='propertyDel'>Delete</button>

          </div>
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
