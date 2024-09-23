import React, { useState, useEffect } from 'react';
import './Propertics.css';
import { RiAddFill, RiSearchLine } from 'react-icons/ri';
import AddProperty from "./addProperty";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropertyDetailsPopup from './PropertyDetailsPopup';
import ConfirmModal from '../../Components/confirm-modal';

const Propertics = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [propertyId, setPropertyId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [propertyToDelete, setPropertyToDelete] = useState(null);

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
        setLoading(true);
        try {
            const token = localStorage.getItem("userToken");
            if (!token) {
                console.log("Token not found");
                return;
            }

            const response = await axios.get('https://rentwave.onrender.com/api/v1/landlord/properties', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                params: {
                    searchTerm: searchTerm,
                },
            });

            setProperties(response.data.data);
            toast.success(response.data.message);
        } catch (error) {
            console.error("Error fetching properties:", error);
            toast.error(error.response?.data?.message || "An error occurred while fetching properties.");
        } finally {
            setLoading(false);
        }
    };

    const deleteProperty = async (id) => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            toast.error("No user token found.");
            return;
        }

        try {
            const response = await axios.delete(`https://rentwave.onrender.com/api/v1/properties/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            toast.success(response.data.message);
            fetchProperties();
        } catch (error) {
            console.error("Error deleting property:", error);
            toast.error(error.response?.data?.message || "An error occurred while deleting the property.");
        }
    };

    const handleDeleteConfirmation = (property) => {
        setPropertyToDelete(property);
        setIsConfirmOpen(true);
    };

    const confirmDelete = () => {
        if (propertyToDelete) {
            deleteProperty(propertyToDelete._id);
        }
        setIsConfirmOpen(false); // Close modal after confirming
        setPropertyToDelete(null); // Reset property to delete
    };

    const cancelDelete = () => {
        setIsConfirmOpen(false); // Close modal without action
        setPropertyToDelete(null); // Reset property to delete
    };

    useEffect(() => {
        fetchProperties();
    }, [searchTerm]);

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
                        <RiAddFill className='icon' />Add property
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
                                <button className='delete-btnland' onClick={() => handleDeleteConfirmation(property)}>Delete</button>
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

            <PropertyDetailsPopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                property={selectedProperty}
                propertyId={propertyId}
            />

            <ConfirmModal
                isOpen={isConfirmOpen}
                onConfirm={confirmDelete} // Confirm delete on confirmation
                onClose={cancelDelete} // Use onClose to cancel
                message={`Are you sure you want to delete the property: ${propertyToDelete?.name}?`}
            />
        </div>
    );
};

export default Propertics;
