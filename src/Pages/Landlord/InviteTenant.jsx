import React from 'react';
import './InviteTenant.css'; // Import the CSS file for styling

const InviteTenant = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Invitation</h2>
        <p>Invite your renter to pay rent safely and <br /> simply</p>
        <div className='nameinput'>
            <div className="words">
                <p>First Name</p>
                <p>Last Name</p>
            </div>
            <div className="inputs">
                <input type="text" />
                <input type="text" />
            </div>
           
        </div>
        <div className="email">
            <p> Email Address</p>
            <input type="email" name="" id="" />
        </div>
        <div className="email">
            <p> Phone Number</p>
            <input type="tel" name="" id="" />
        </div>
        <div className="email">
            <p> Property</p>
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
                <p>Lease start</p>
                <p>Lease end</p>
            </div>
            <div className="inputs">
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />
            </div>
           
        </div>
        <div className="agree">
            <input type="checkbox" name="" id="" />
            <div className='p'>Remove renter at end of lease.</div>
        </div>
        <div className="agree">
            <input type="checkbox" name="" id="" />
            <div className='p'>Require Renters Insurance</div>
        </div>
        <button onClick={handleSubmit}>Save</button>
      </div>

    </div>
  );
};

export default InviteTenant;
