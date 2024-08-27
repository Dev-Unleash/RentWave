import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import AuthRoutes from './Components/AuthRoutes/AuthRoutes';
import Contact_us from './Pages/Contact_us/Contact_us'



const router = createBrowserRouter([
  
      {
        path: "/",
        element: <Home/>
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
      
    ],
  
  // {
  //   path: "/auth",
  //   element: <AuthLayout/>,
  //   children: [
  //     {
  //       path:"login",
  //       element:<Login/>
  //     },
  //     {
  //       path:"signUp",
  //       element:<SignUp/>
  //     }
  //   ]
      
  // }
  
);

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App
