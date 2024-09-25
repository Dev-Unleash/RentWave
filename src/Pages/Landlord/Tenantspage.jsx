import React, { useEffect, useState } from "react";
import "./Tenantspage.css";
import InviteTenant from "./InviteTenant";
import ConfirmModal from "../../Components/confirm-modal"; // Ensure the path is correct
import { RiAddFill, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

const Tenantspage = () => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const [tenants, setTenants] = useState([]);
  const [tenantToDelete, setTenantToDelete] = useState(null); // Track tenant to delete
  const [singleTenant, setSingleTenant] = useState(null); // Store fetched tenant details
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);

  // Function to open the delete modal
  const openDeleteModal = (tenantId) => {
    setTenantToDelete(tenantId);
    setIsDeleteModalOpen(true);
  };

  // Function to close the delete modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTenantToDelete(null);
  };

  // Function to handle tenant deletion
  const handleDelete = async () => {
    const url = `https://rentwave.onrender.com/api/v1/tenants/${tenantToDelete}`;
    const token = localStorage.getItem("userToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(url, config);
      fetchTenant(); // Refresh the tenant list after deletion
      closeDeleteModal();
    } catch (error) {
      console.error(error);
    }
  };

  // Function to fetch tenant by ID
  const getTenantById = async (tenantId) => {
    const url = `https://rentwave.onrender.com/api/v1/tenant/${tenantId}`;
    const token = localStorage.getItem("userToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(url, config);
      setSingleTenant(response.data.data); // Store the fetched tenant in state
      console.log("Fetched tenant details:", response.data.data); // Debugging purpose
    } catch (error) {
      console.error("Error fetching tenant by ID:", error.response?.data?.message || error.message);
    }
  };

  // Function to fetch all tenants
  const getTenants = async () => {
    const url = "https://rentwave.onrender.com/api/v1/landlord/tenants"; // Correct endpoint for fetching all tenants
    const token = localStorage.getItem("userToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(url, config);
      setTenants(response.data.data); // Assuming 'data' contains tenant array
    } catch (error) {
      console.error("Error fetching tenants:", error);
    }
  };


  const fetchTenant = async () => {
    const propertiesUrl = "https://rentwave.onrender.com/api/v1/landlord/properties";
    const tenantsUrl = "https://rentwave.onrender.com/api/v1/tenants";
    const token = localStorage.getItem("userToken");
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };


    try {
      if (!token) throw new Error("No token found");

      const propertiesResponse = await axios.get(propertiesUrl, config);
      const tenantsResponse = await axios.get(tenantsUrl, config);

      setTenants(tenantsResponse.data.data);
      setProperties(propertiesResponse.data.data);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Error fetching counts:", message);
    }
  };

  const tenantByLandlord = tenants.filter((tenant) => {
    return tenant.landlord === properties[0].listedBy;
  })

  useEffect(() => {
    getTenants(); // Fetch all tenants on component mount
    fetchTenant();
  }, []);

  return (
    <div className="Pages">
      <div className="PropsContainers">
        <div className="up">
          <p>Tenants</p>
          <div className="input">
            <RiSearchLine className="icon" />
            <input type="search" placeholder="Search" className="put" />
          </div>
        </div>
        <div className="btnes">
          <button className="bot" onClick={() => setIsInviteModalOpen(true)}>
            + Invite Tenants
          </button>
        </div>
        <div className="tableland">
          <div className="tenantTable">
            <table className="landlord-table" style={{overflowY:'scroll'}}>
              <thead>
                <tr>
                  <th className="name-column">Name</th>
                  <th className="name-column1">Lease start</th>
                  <th className="name-column1">Lease End</th>
                  <th className="name-column1">Role</th>
                  <th className="name-column1">Action</th>
                </tr>
              </thead>
              <tbody>
                {tenantByLandlord.map((item) => (
                  <tr key={item._id}>
                    <td className="name-column">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="name-column1">
                      {new Date(item.leaseStart).toLocaleDateString()}
                    </td>
                    <td className="name-column1">
                      {new Date(item.leaseEnd).toLocaleDateString()}
                    </td>
                    <td className="name-column1">{item.role}</td>
                    <td className="name-column1">
                      {/* Fetch and view tenant by ID
                      <button className="view-btn" onClick={() => getTenantById(item._id)}>
                        View
                      </button> */}
                      {/* Delete tenant */}
                      <button className="delete-btnland" onClick={() => openDeleteModal(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Display the InviteTenant modal */}
      <InviteTenant isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} />
      
      {/* Display the ConfirmModal for delete confirmation */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      />

      {/* Display fetched tenant details */}
      {singleTenant && (
        <div className="tenant-details">
          <h2>Tenant Details</h2>
          <p>Name: {singleTenant.firstName} {singleTenant.lastName}</p>
          <p>Email: {singleTenant.email}</p>
          <p>Phone Number: {singleTenant.phoneNumber}</p>
          <p>Property ID: {singleTenant.property}</p>
          <p>Landlord ID: {singleTenant.landlord}</p>
        </div>
      )}
    </div>
  );
};

export default Tenantspage;
