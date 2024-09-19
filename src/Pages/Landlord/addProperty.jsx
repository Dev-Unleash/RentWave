import React, { useRef } from 'react';
import './AddProperty.css';
import { LuUpload } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";

const AddProperty = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

    const fileInputRef = useRef(null);

    const chooseFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        // You can process the file here, e.g., upload it or display its name
            console.log('Selected file:', file.name);
        }
    };


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Property</h2>
        <p>Add or edit your property details</p>
        <div className='Prosinput'>
            <div className="words">
                <p>Property Name</p>  
                <input type="text" className='inputs'/>
            </div>
        </div>
        <div className="email">
            <label for="location">Location</label>
            <input type="text" id="location" name="location" required={true}/>
        </div>
        <div className="email">
            <p> Property type</p>
            <select>
                <option>Select Property</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Studio</option>
            </select>
        </div>
        <div className='nameinput'>
            <div className="words">
                <p>Price</p>
                <p>Amenities</p>
            </div>
            <div className="inputs">
                <input type="text" placeholder='₦' />
                <input type="text" name="" id="" />
            </div>
           
        </div>
        <div className='nameinput'>
            <div className="words">
                <p>Bedrooms</p>
                <p>Bathrooms</p>
            </div>
            <div className="inputs">
                <input type="text"  />
                <input type="text" />
            </div>
        </div>
        <div className="Desc">
            <p>Description</p>
            <input type="text" className='descInput'/>
        </div>
        <div className='Buttons'>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <button className='But' onClick={chooseFile}> <LuUpload className=' buticon'/> Upload Lease</button>
        </div>  
        <button className='Button2'onClick={handleSubmit}> Save </button>      
 </div>

    </div>
  );
};

export default AddProperty;
