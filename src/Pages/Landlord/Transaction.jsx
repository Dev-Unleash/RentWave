import React from 'react'
import './Transaction.css'
import image from "../../assets/Clip path group.png"
import { CiSearch } from "react-icons/ci";

import { RiDownload2Line, RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Transaction = () => {
  const data = [
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
    { name: "John ade", Amount: "₦1000000" , date:"2023-09-01", status: "Pending", time:"2:45pm" },
  ]
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <div className='input'>
            <RiSearchLine className='icon' />
            <input type="search" placeholder='Search' className='put' />
          </div>
        </div>
        <div className="btnes">
          <botton className="dst"><RiDownload2Line className='icon' />Download statement</botton>
          <botton className="ds">Withdraw</botton>
        </div>
        <div className="table">
          <div className="tableData">
            <table>
              <thead>
                <tr>
                  <th className='name-column'>Name</th>
                  <th className='name-column1'>Amount</th>
                  <th className='name-column1'>Date</th>
                  <th className='name-column1'>Status</th>
                  <th className='name-column2'>Time</th>


                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className='name-column'><Link to='/TransactionVeiw1' style={{ cursor: 'pointer', color: "black", fontWeight: 'normal' }}>{item.name}</Link></td>
                    <td className='name-column1'>{item.Amount}</td>
                    <td className='name-column1'>{item.date}</td>
                    <td className='name-column1'>{item.status}</td>
                    <td className='name-column1'>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          {/* <Outlet/> */}
        </div>

      </div>
    </div>


  )
}

export default Transaction
