import React from 'react'
import"./Tenant.css"
const TenantProfile = () => {
  return (
    <div className='AcctSettingCon' >
      <div className="AcctSettingsWrapper">
        <div className="AcctSettingsHeader">
          <h3>Profile</h3>
        </div>
        <div className="AcctSettingsDown">
        <div className="AcctProfile">
        <div className="Pics">
          <img src={ola} alt="Profile" />
        </div>
       
      </div>
      <div className="AcctInputContainer">
      <form action="" style={{height:"100%",width:"100%"}}>
          <div className="AcctInput">
            <p>First Name</p>
          <input type="text" />
          </div>
          <div className="AcctInput">
            <p>Last Name</p>
          <input type="text" />
          </div>
          <div className="AcctInput">
            <p>Phone Number</p>
          <input type="text" />
          </div>
          <div className="AcctInputdown">
            <div className="AcctInputdown1">
            <p>Gender</p>
          <select name="Gender" id="">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
          </select>
          </div>
          <div className="AcctInputdown1">
            <p>Date of Birth</p>
          <input type="date" style={{width:"100%",height:"60%"}} />
          </div>
            </div>
         
      </form>
      </div>
      <button style={{height:"8%",width:"45%",borderRadius:"10px",
        backgroundColor:"#4D86DB",cursor:"pointer",border:"none",color:"white",fontSize:"18px"}}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default TenantProfile