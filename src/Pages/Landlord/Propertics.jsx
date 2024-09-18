import React from 'react'
import './Propertics.css'
import image from "../../assets/Group (1).png"

const Propertics = () => {
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>My Portfolio</p>
          <input type="search" placeholder='Search' />
        </div>
        <div className="btnsLandlord">
          <botton className='btnsLandlord'>Add property</botton>
        </div>
        <div className="table">
          <img src={image} alt="" />
          <p>No properties yet but properties for this portfolio will be listed <br/> here.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Propertics
