import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivate = () => {
  return (
    <>
    {
        admin === "true" ?
        <Outlet/>:<Navigate to={"/Login"}/>
    }
    </>
  )
}

export default AdminPrivate