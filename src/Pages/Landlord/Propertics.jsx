// import React, { useState, useEffect } from 'react';
// import './Propertics.css';
// import { RiAddFill, RiSearchLine } from 'react-icons/ri';
// import AddProperty from "./addProperty";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import PropertyDetailsPopup from './PropertyDetailsPopup'; // Import the popup component

// const Propertics = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null); // State for the selected property
//   const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the popup visibility
//   const [propertyId, setPropertyId] = useState(null);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
  
//   const openPopup = (property) => {
//     setPropertyId(property._id);
//     setSelectedProperty(property);
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setSelectedProperty(null);
//     setIsPopupOpen(false);
//   };

//   const fetchProperties = async () => {
//     try {
//       const token = localStorage.getItem("userToken");
//       const response = await axios.get('https://rentwave.onrender.com/api/v1/landlord/properties', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       setProperties(response.data.data);
//       toast.success(response.data.message);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//       toast.error(error.response?.data?.errors);
//     }
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return (
//     <div className='Pages'>
//       <div className="PropsContainers">
//         <div className="up">
//           <p>My Property</p>
//           <div className='input'>
//             <RiSearchLine className='icon' />
//             <input type="search" placeholder='Search' className='put' />
//           </div>
//         </div>
//         <div className="btnsLandlord">
//           <button className='btnsLand' onClick={openModal} >
//             <RiAddFill className='icon' />Add property
//           </button>
//         </div>
//         <div className="table3">
//           <div className="propertiesHeader">
//             <h6>All Properties</h6>
//                      </div>
//           {properties.length > 0 ? (
//             properties.map(property => (
//               <div 
//                 className='propertiesCard' 
//                 key={property._id} 
//                 onClick={() => openPopup(property)} 
//               >
//                 <h6>Property Name:{property.name}</h6>
//                 <h6>Location:{property.location}</h6>
//                 <h6>Availability:{property.isAvailable ? "Available" : "Not Available"}</h6>
//               </div>
//             ))
//           ) : (
//             <p>Loading Properties....</p>
//           )}
//         </div>
//       </div>

//       <AddProperty
//         isOpen={isModalOpen} 
//         onClose={closeModal} 
//       />

//       {/* Popup for property details */}
//       <PropertyDetailsPopup 
//         isOpen={isPopupOpen} 
//         onClose={closePopup} 
//         property={selectedProperty} 
//         propertyId={propertyId}
//       />
//     </div>
//   );
// };

// export default Propertics;

// import React, { useState, useEffect } from 'react';
// import './Propertics.css';
// import { RiAddFill, RiSearchLine } from 'react-icons/ri';
// import AddProperty from "./addProperty";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import PropertyDetailsPopup from './PropertyDetailsPopup';

// const Propertics = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [propertyId, setPropertyId] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading state

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
  
//   const openPopup = (property) => {
//     setPropertyId(property._id);
//     setSelectedProperty(property);
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setSelectedProperty(null);
//     setIsPopupOpen(false);
//   };

//   const fetchProperties = async () => {
//     setLoading(true); // Start loading
//     try {
//       const token = localStorage.getItem("userToken");
//       if (!token) {
//         toast.error("No user token found.");
//         return;
//       }

//       const response = await axios.get('https://rentwave.onrender.com/api/v1/landlord/properties', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       setProperties(response.data.data);
//       toast.success(response.data.message);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//       toast.error(error.response?.data?.message || "An error occurred while fetching properties.");
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return (
//     <div className='Pages'>
//       <div className="PropsContainers">
//         <div className="up">
//           <p>My Property</p>
//           <div className='input'>
//             <RiSearchLine className='icon' />
//             <input type="search" placeholder='Search' className='put' />
//           </div>
//         </div>
//         <div className="btnsLandlord">
//           <button className='btnsLand' onClick={openModal}>
//             <RiAddFill className='icon' />Add property
//           </button>
//         </div>
//         <div className="table3">
//           <div className="propertiesHeader">
//             <h6>All Properties</h6>
//           </div>
//           {loading ? (
//             <p>Loading Properties....</p>
//           ) : properties.length > 0 ? (
//             properties.map(property => (
//               <div 
//                 className='propertiesCard' 
//                 key={property._id} 
//                 onClick={() => openPopup(property)} 
//               >
//                 <h6>Property Name: {property.name}</h6>
//                 <h6>Location: {property.location}</h6>
//                 <h6>Availability: {property.isAvailable ? "Available" : "Not Available"}</h6>
//               </div>
//             ))
//           ) : (
//             <p>No properties found.</p>
//           )}
//         </div>
//       </div>

//       <AddProperty
//         isOpen={isModalOpen} 
//         onClose={closeModal} 
//       />

//       {/* Popup for property details */}
//       <PropertyDetailsPopup 
//         isOpen={isPopupOpen} 
//         onClose={closePopup} 
//         property={selectedProperty} 
//         propertyId={propertyId}
//       />
//     </div>
//   );
// };

// export default Propertics;



import React, { useState, useEffect } from 'react';
import './Propertics.css';
import { RiAddFill, RiSearchLine } from 'react-icons/ri';
import AddProperty from "./addProperty";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropertyDetailsPopup from './PropertyDetailsPopup';

const Propertics = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [propertyId, setPropertyId] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [searchTerm, setSearchTerm] = useState(''); // Search term

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openPopup = (property) => {
        setPropertyId(property._id);
        setSelectedProperty(property);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setSelectedProperty(null);
        setIsPopupOpen(false);
    };

    const fetchProperties = async () => {
        setLoading(true); // Start loading
        try {
            const token = localStorage.getItem("userToken");
            if (!token) {
            console.log("token not found")
                return;
            }

            const response = await axios.get('https://rentwave.onrender.com/api/v1/landlord/properties', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                params: {
                    searchTerm: searchTerm, // Add search term to query parameters
                },
            });

            setProperties(response.data.data);
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error fetching properties:", error);
            toast.error(error.response?.data?.message || "An error occurred while fetching properties.");
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        fetchProperties();
    }, [searchTerm]); // Re-fetch properties when search term changes

    return (
        <div className='Pages'>
            <div className="PropsContainers">
                <div className="up">
                    <p>My Property</p>
                    <div className='input'>
                        <RiSearchLine className='icon' />
                        <input type="search" placeholder='Search' className='put' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className="btnsLandlord">
                    <button className='btnsLand' onClick={openModal}>
                        + Add property
                    </button>
                </div>
                <div className="table3">
                    <div className="propertiesHeader">
                        <h6>All Properties</h6>
                    </div>
                    {loading ? (
                        <p>Loading Properties....</p>
                    ) : properties.length > 0 ? (
                        properties.map(property => (
                            <div
                                className='propertiesCard'
                                key={property._id}
                                onClick={() => openPopup(property)}
                            >
                                <h6>Property Name: {property.name}</h6>
                                <h6>Location: {property.location}</h6>
                                <h6>Availability: {property.isAvailable ? "Available" : "Not Available"}</h6>
                            </div>
                        ))
                    ) : (
                        <p>No properties found.</p>
                    )}
                </div>
            </div>

            <AddProperty
                isOpen={isModalOpen}
                onClose={closeModal}
            />

            {/* Popup for property details */}
            <PropertyDetailsPopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                property={selectedProperty}
                propertyId={propertyId}
            />
        </div>
    );
};

export default Propertics;