import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import AuthRoutes from './Pages/Landlord/AuthRoutes/AuthRoutes.jsx';
import Contact_us from './Pages/Contact_us/Contact_us'
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import ResetPassword from './Components/Auth/ResetPassword';
import ForgotPassword from './Components/Auth/ForgotPassword';
import Tenant from "./Pages/Tenant/Tenant.jsx"
import TenantPrivate from './Pages/Tenant/TenantPrivate.jsx';
import Landlord from "./Pages/Landlord/Landlord.jsx"
import Admin from "./Pages/Admin/Admin.jsx"
import AdminPrivate from './Pages/Admin/AdminPrivate.jsx';


const router = createBrowserRouter([
{  path:"/Tenant",
  element:<Tenant/>},
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Signup",
        element:<Signup/>
      },
      {
        path:"/ResetPassword",
        element:<ResetPassword/>
      },{
        path:"ForgotPassWord",
        element:<ForgotPassword/>
      },
      {
        path: "/Contact_us",
        element: <Contact_us/>
      },
      {
        path: "/Services",
        element: <Services/>
      },
      {
        path: "/Blog",
        element: <Blog/>
      },
      {
            
        path:"/Landlord",
        element:<Landlord/>
       },
      {
        element:<AdminPrivate/>,
        children:[
          { path:"/Admin",
            element:<Admin/>
           },
        ],
      },
      {
        element:<AuthRoutes/>,
        children:[
          // {
            
          //     path:"/Landlord",
          //     element:<Landlord/>
          //    },
          
        ]
      },
     
    ],
  
  
  
);

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App
