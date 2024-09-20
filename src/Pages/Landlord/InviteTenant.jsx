// import React, { useRef } from 'react';
// import './InviteTenant.css';
// import { LuUpload } from "react-icons/lu";
// import { RiErrorWarningFill } from "react-icons/ri";
// import axios from 'axios';

// const InviteTenant = ({ isOpen, onClose, onSubmit }) => {

//     url= ("https://rentwave.onrender.com//api/v1/onboardtenant");

//     try {
//         await axios.post(url, {}, config);
//     } catch {

//     }

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     onSubmit();
//     onClose();
//   };

//     const fileInputRef = useRef(null);

//     const chooseFile = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//         // You can process the file here, e.g., upload it or display its name
//             console.log('Selected file:', file.name);
//         }
//     };


//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-btn" onClick={onClose}>&times;</span>
//         <h2>Invitation</h2>
//         <p>Invite your renter to pay rent safely and <br /> simply</p>
//         <div className='nameinput'>
//             <div className="words">
//                 <p>First Name</p>
//                 <p>Last Name</p>
//             </div>
//             <div className="inputs">
//                 <input type="text" />
//                 <input type="text" />
//             </div>
           
//         </div>
//         <div className="email">
//             <p> Email Address</p>
//             <input type="email" name="" id="" />
//         </div>
//         <div className="email">
//             <p> Phone Number</p>
//             <input type="tel" name="" id="" />
//         </div>
//         <div className="email">
//             <p> Property</p>
//             <select>
//                 <option>Select Property</option>
//                 <option>Apartment</option>
//                 <option>House</option>
//                 <option>Condo</option>
//                 <option>Townhouse</option>
//                 <option>Studio</option>
//             </select>
//         </div>
//         <div className='nameinput'>
//             <div className="words">
//                 <p>Lease start</p>
//                 <p>Lease end</p>
//             </div>
//             <div className="inputs">
//                 <input type="date" name="" id="" />
//                 <input type="date" name="" id="" />
//             </div>
           
//         </div>
//         <div className="agree">
//             <input type="checkbox" name="" id="" />
//             <div className='p'>Remove renter at end of lease.<RiErrorWarningFill className='icon'/></div>
//         </div>
//         <div className="agree">
//             <input type="checkbox" name="" id="" />
//             <div className='p'>Require Renters Insurance</div>
//         </div>
//         <div className='Buttons'>
//             <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: 'none' }}
//                 onChange={handleFileChange}
//             />
//             <button className='Button' onClick={chooseFile}> <LuUpload className='icon'/> Upload Lease</button>
//             <button className='Button2'onClick={handleSubmit}> Save </button>
//         </div>        
//  </div>

//     </div>
//   );
// };

// export default InviteTenant;




import React, { useState, useRef } from 'react';
import './InviteTenant.css';
import { LuUpload } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InviteTenant = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        property: '',
        leaseStart: '',
        leaseEnd: '',
        file: null,
        removeRenter: false,
        requireInsurance: false
    });

    const fileInputRef = useRef(null);

    // Function to handle file selection
    const chooseFile = () => {
        fileInputRef.current.click();
    };

    // Function to handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, file });
            console.log('Selected file:', file.name);
        }
    };

    // Function to handle input change for text fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle checkbox change
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    // Function to submit the form and onboard the tenant
    const handleSubmit = async (e) => {
        e.preventDefault();

        const Token =localStorage.getItem("userToken"); // Replace with the actual token
        const url = "https://rentwave.onrender.com/api/v1/onboardtenant";

        // Prepare request body
        const body = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            property: formData.property, // You will need to send the actual ObjectId for the property
        };

        // Prepare request config with the Authorization header
        const config = {
            headers: {
                Authorization: `Bearer ${Token}`,
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(url, body, config);
            toast.success("Tenant onboarded successfully!", { autoClose: 3000 });
            onSubmit();
            onClose();
        } catch (error) {
            toast.error("Error onboarding tenant. Please try again.", { autoClose: 3000 });
            console.error("Error onboarding tenant:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Invitation</h2>
                <p>Invite your renter to pay rent safely and <br /> simply</p>
                
                {/* Form Fields */}
                <div className='nameinput'>
                    <div className="words">
                        <p>First Name</p>
                        <p>Last Name</p>
                    </div>
                    <div className="inputs">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="email">
                    <p>Email Address</p>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="email">
                    <p>Phone Number</p>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="email">
                    <p>Property</p>
                    <select
                        name="property"
                        value={formData.property}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Property</option>
                        <option value="apartment-objectId">Apartment</option>
                        <option value="house-objectId">House</option>
                        <option value="condo-objectId">Condo</option>
                        <option value="townhouse-objectId">Townhouse</option>
                        <option value="studio-objectId">Studio</option>
                    </select>
                </div>

                {/* Lease Period */}
                <div className='nameinput'>
                    <div className="words">
                        <p>Lease start</p>
                        <p>Lease end</p>
                    </div>
                    <div className="inputs">
                        <input
                            type="date"
                            name="leaseStart"
                            value={formData.leaseStart}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="leaseEnd"
                            value={formData.leaseEnd}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Options */}
                <div className="agree">
                    <input
                        type="checkbox"
                        name="removeRenter"
                        checked={formData.removeRenter}
                        onChange={handleCheckboxChange}
                    />
                    <div className='p'>Remove renter at end of lease.<RiErrorWarningFill className='icon'/></div>
                </div>
                
                <div className="agree">
                    <input
                        type="checkbox"
                        name="requireInsurance"
                        checked={formData.requireInsurance}
                        onChange={handleCheckboxChange}
                    />
                    <div className='p'>Require Renters Insurance</div>
                </div>

                {/* Upload and Submit */}
                <div className='Buttons'>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button className='Button' onClick={chooseFile}>
                        <LuUpload className='icon' /> Upload Lease
                    </button>
                    <button className='Button2' onClick={handleSubmit}> Save </button>
                </div>
                <ToastContainer />        
            </div>
          
        </div>
    );
};

export default InviteTenant;


