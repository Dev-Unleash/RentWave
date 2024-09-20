import React, { useState } from 'react'
import './Tenantspage.css'
import InviteTenant from './InviteTenant'
import image from "../../assets/Clip.png"
import { RiAddFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Tenantspage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubmit = () => alert('Submitted!');

  const data = [
    { name: "John ade", dateRegistered: "2023-09-01", status: "Active", role: "Tenant" },
    { name: "Jane falade", dateRegistered: "2023-08-15", status: "Inactive", role: "Tenant" },
    { name: "Sam avede", dateRegistered: "2023-07-21", status: "Active", role: "Tenant" },
    { name: "Alex chinonso", dateRegistered: "2023-06-14", status: "Active", role: "Tenant" },
    { name: "Maria akpan", dateRegistered: "2023-05-10", status: "Inactive", role: "Tenant" },
  ]

  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Tenants</p>
          <div className='input'>
            <RiSearchLine className='icon' />
            <input type="search" placeholder='Search' className='put' />
          </div>
        </div>
        <div className="btnes">
          <p>View your tenants</p>
          <botton className='bot' onClick={openModal}><RiAddFill className='icon' /> Invite Tenants</botton>
        </div>
        <div className="table1">
          {/* <img src={image} alt="" />
          <p>No renters yet but renter details and status will appear here.</p> */}
          <div className='tenantTable'>
          <table>
            <thead>
              <tr style={{borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}>
                <th className='name-column'>Name</th>
                <th className='name-column1'>Date Registered</th>
                <th className='name-column1'>Status</th>
                <th className='name-column1'>Role</th>
                <th className='name-column2'>Action</th>


              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className='name-column'><Link to='/TenantProfileView1' style={{ cursor: 'pointer', color: "black", fontWeight: 'normal' }}>{item.name}</Link></td>
                  <td className='name-column1'>{item.dateRegistered}</td>
                  <td className='name-column1'>{item.status}</td>
                  <td className='name-column1'>{item.role}</td>
                  <td><button className='AdminlandlordDel'>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>
        </div>

      </div>
      <InviteTenant
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Tenantspage
