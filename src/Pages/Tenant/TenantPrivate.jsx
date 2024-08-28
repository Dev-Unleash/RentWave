import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const TenantPrivate = () => {
  return (
    <>
    {
        tenant == "true"?
        <Outlet/>
        :<Navigate to={"/Login"}/>
    }
    </>
  )
}

export default TenantPrivate