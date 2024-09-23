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
  const [tenants, setTenants] = useState([]);
  const [tenantToDelete, setTenantToDelete] = useState(null); // Track tenant to delete

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
      // Refresh the tenant list after deletion
      getTenants();
      closeDeleteModal();
    } catch (error) {
      console.error(error);
    }
  };

  const getTenants = async () => {
    const url = "https://rentwave.onrender.com/api/v1/tenants";
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
      console.error(error);
    }
  };

  useEffect(() => {
    getTenants();
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
        <div className="table1">
        <div className="tenantTable">
  <table className="tenant-table">
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
      {tenants.map((item) => (
        <tr key={item._id}>
          <td className="name-column">
           {item.firstName}  {item.lastName}
          </td>
          <td className="name-column1">{new Date(item.leaseStart).toLocaleDateString()}</td>
          <td className="name-column1">{new Date(item.leaseEnd).toLocaleDateString()}</td>
          <td className="name-column1">{item.role}</td>
          <td className="name-column1">
            <button className="delete-btnland" onClick={() => openDeleteModal(item._id)}>Delete</button>
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
    </div>
  );
};

export default Tenantspage;
