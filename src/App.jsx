// import React from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { useState } from 'react';
// import Home from './Pages/Home/Home';
// import Blog from './Pages/Blog/Blog';
// import Services from './Pages/Services/Services';
// import AuthRoutes from './Pages/Landlord/AuthRoutes/AuthRoutes.jsx';
// import Contact_us from './Pages/Contact_us/Contact_us'
// import Login from './Components/Auth/Login';
// import Signup from './Components/Auth/Signup';
// import ResetPassword from './Components/Auth/ResetPassword';
// import ForgotPassword from './Components/Auth/ForgotPassword';
// import Tenant from "./Pages/Tenant/TenantHome.jsx"
// import TenantPrivate from './Pages/Tenant/TenantPrivate.jsx';
// import Landlord from "./Pages/Landlord/Landlord.jsx"
// import Admin from "./Pages/Admin/Admin.jsx"
// import AdminPrivate from './Pages/Admin/AdminPrivate.jsx';
// import TenantHome from './Pages/Tenant/TenantHome.jsx';
// import TenantSettings from './Pages/Tenant/TenantSettings.jsx';
// import TenantPayment from './Pages/Tenant/TenantPayment.jsx';
// import TenantSub from './Pages/Tenant/TenantSub.jsx';
// import TenMain from './Pages/Tenant/TenMain.jsx';
// import TenantPayLayout from './Pages/Tenant/TenantPayLayout.jsx';
// import TenantPayHero from './Pages/Tenant/TenantPayHero.jsx';
// import TenantCards from './Pages/Tenant/TenantCards.jsx';
// import MainRequest from './Pages/Tenant/MainRequest.jsx';

// const router = createBrowserRouter([

//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path:"/Login",
//         element:<Login/>
//       },
//       {
//         path:"/Signup",
//         element:<Signup/>
//       },
//       {
//         path:"/ResetPassword",
//         element:<ResetPassword/>
//       },{
//         path:"/ForgotPassWord",
//         element:<ForgotPassword/>
//       },
//       {
//         path: "/About_Us",
//         element: <Contact_us/>
//       },
//       {
//         path: "/Services",
//         element: <Services/>
//       },
//       {
//         path: "/Blog",
//         element: <Blog/>
//       },
//       {
            
//         path:"/Landlord",
//         element:<Landlord/>
//        },
//       {
//         element:<AdminPrivate/>,
//         children:[
//           { path:"/Admin",
//             element:<Admin/>
//            },
//         ],
//       },
//       {
//         element:<AuthRoutes/>,
//         children:[
//           // {
            
//           //     path:"/Landlord",
//           //     element:<Landlord/>
//           //    },
          
//         ]
//       },
//      {
//       element:<TenantPrivate showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup}/>,
//       children:[
//         {
//           path:"/TenantHome",
//           element:<TenantHome/>
//         },
//         {
//           path:"/TenantSettings",
//           element:<TenantSettings/>
//         },{
//           path:"/MaintainReq",
//           element:<MainRequest/>
//         },
//         {
//           element:<TenantPayLayout/>,
//           children:[
//             {
//               path:"/TenantCards",
//               element:<TenantCards/>
//             },
//             {
//               path:"/TenantPayment",
//               element:<TenantPayment/>

//             },
           
//           ]
//         },
//         {
//           path:"/TenantSub",
//           element:<TenantSub/>
//         },
//         {
//           path:"/TenantMain",
//           element:<TenMain/>
//         },
//       ]
//      }
//     ],
  
  
  
// );

// const App = () => {
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   return(
//     <RouterProvider router={router} />
//   )
// }

// export default App
import React, { useState } from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import AuthRoutes from './Pages/Landlord/AuthRoutes/AuthRoutes.jsx';
import Contact_us from './Pages/Contact_us/Contact_us';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import ResetPassword from './Components/Auth/ResetPassword';
import ForgotPassword from './Components/Auth/ForgotPassword';
import  ResetMessage from './Components/Auth/ResetMesssage.jsx'
import TenantPrivate from './Pages/Tenant/TenantPrivate.jsx';
import Landlord from "./Pages/Landlord/Landlord.jsx";
// import Admin from "./Pages/Admin/Admin.jsx";
import AdminPrivate from './Pages/Admin/AdminPrivate.jsx';
import AdminHome from './Pages/Admin/AdminHome.jsx';
import AdminLandlord from './Pages/Admin/AdminLandlord.jsx';
import AdminTenant from './Pages/Admin/AdminTenant.jsx';
import AdminSettings from './Pages/Admin/AdminSettings.jsx'
import TenantHome from './Pages/Tenant/TenantHome.jsx';
import TenantSettings from './Pages/Tenant/TenantSettings.jsx';
import TenantPayment from './Pages/Tenant/TenantPayment.jsx';
import TenantSub from './Pages/Tenant/TenantSub.jsx';
import TenMain from './Pages/Tenant/TenMain.jsx';
import TenantPayLayout from './Pages/Tenant/TenantPayLayout.jsx';
import TenantCards from './Pages/Tenant/TenantCards.jsx';
import MainRequest from './Pages/Tenant/MainRequest.jsx';

const App = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/ResetPassword",
      element: <ResetPassword />
    },
    {
      path: "/ForgotPassWord",
      element: <ForgotPassword />
    },
    {
      path:"/ResetMessage",
      element:<ResetMessage/>
    },
    {
      path: "/About_Us",
      element: <Contact_us />
    },
    {
      path: "/Blog",
      element: <Blog />
    },
    {
      path: "/Landlord",
      element: <Landlord />
    },
    {
      element: <AdminPrivate showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup} />,
      children: [
        {
          path: "/AdminHome",
          element: <AdminHome />
        },
        {
          path: "/AdminLandlord",
          element: <AdminLandlord/>
        },
        {
          path: "/AdminTenant",
          element: <AdminTenant/>
        },
     
     
        {
          path: "/AdminSettings",
          element: <AdminSettings />
        },
       
          ]
        },
    {
      element: <AuthRoutes />,
      children: [
        // Additional routes for landlord
      ]
    },
    {
      element: <TenantPrivate showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup} />,
      children: [
        {
          path: "/TenantHome",
          element: <TenantHome />
        },

     
        {
          path: "/TenantSettings",
          element: <TenantSettings />
        },
        {
          path: "/MaintainReq",
          element: <MainRequest />
        },
        {
          element: <TenantPayLayout />,
          children: [
            {
              path: "/TenantCards",
              element: <TenantCards />
            },
            {
              path: "/TenantPayment",
              element: <TenantPayment />
            },
          ]
        },
        {
          path: "/TenantSub",
          element: <TenantSub />
        },
        {
          path: "/TenantMain",
          element: <TenMain />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
