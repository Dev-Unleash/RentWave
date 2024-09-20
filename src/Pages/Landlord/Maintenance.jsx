import React from 'react'
import './Landlord.css'
import './Maintenance.css'
import image from '../../assets/download 16.png'

const Maintenance = () => {
  const data = [
    { Reason: "Burst pipe", Date: "2023-09-01", status: "Read", time: "2:45pm" },
    { Reason: "Leaking roof", Date: "2023-09-02", status: "Unread", time: "10:00am" },
    { Reason: "Clogged drain", Date: "2023-09-03", status: "Unread", time: "5:30pm" },
    { Reason: "Broken window", Date: "2023-09-04", status: "Read", time: "1:15pm" },
  ];

  return (
    <div className='Pages'>
      <div className="Maintainontainer">
        <div className="headup">
        <h4>Maintenance Request</h4>
        <p>Keep track of maintenance requests on RentWave</p>
        </div>
        <div className="thebox">
          <div className="inside">
            {/* <h4>Oh snap! there’s nothing here</h4>
            <img src={image} alt="" />
            <p>There are no maintenance request yet on this account</p> */}
            
            <table>
              <thead>
                <tr className="TenantMainDownHeader">
                  <th className="TenMaincolumn1" style={{borderTopLeftRadius:"5px",width:"30%"}}>REASON</th>
                  <th className="TenMaincolumn">DATE/TIME</th>
                  <th className="TenMaincolumn"  style={{borderTopRightRadius:"5px"}}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="TenMaincolumn1"style={{width:"30%"}} >{item.Reason}</td>
                    <td className="TenMaincolumn" style={{width:"40%"}}>{item.Date} /{item.time}</td>
                   
                    <td className="TenMaincolumn">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
         

            </div>
        </div>        
      </div>

    </div>
  )
}

export default Maintenance
