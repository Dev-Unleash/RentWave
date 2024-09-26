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
  const [tenantToDelete, setTenantToDelete] = useState(null);
  const [singleTenant, setSingleTenant] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search

  const openDeleteModal = (tenantId) => {
    setTenantToDelete(tenantId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTenantToDelete(null);
  };

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
      setSingleTenant(response.data.data);
    } catch (error) {
      console.error("Error fetching tenant by ID:", error.response?.data?.message || error.message);
    }
  };

  const getTenants = async () => {
    const url = "https://rentwave.onrender.com/api/v1/landlord/tenants";
    const token = localStorage.getItem("userToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(url, config);
      setTenants(response.data.data);
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
    return tenant.landlord === properties[0]?.listedBy;
  });

  const filteredTenants = tenantByLandlord.filter((tenant) =>
    `${tenant.firstName} ${tenant.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filtered tenants based on search term

  useEffect(() => {
    getTenants();
    fetchTenant();
  }, []);

  return (
    <div className="Pages">
      <div className="PropsContainers">
        <div className="up">
          <p>Tenants</p>
          <div className="input">
            <RiSearchLine className="icon"style={{width:"30px",height:"30px"}} />
            <input
              type="search"
              placeholder="Search"
              className="put"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
            />
          </div>
        </div>
        <div className="btnes">
          <button className="bot" onClick={() => setIsInviteModalOpen(true)}>
            + Invite Tenants
          </button>
        </div>
        <div className="tableland">
          <div className="tenantTable">
            <table className="landlord-table">
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
                {filteredTenants.map((item) => (
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
      
      <InviteTenant isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} />
      
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      />

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
