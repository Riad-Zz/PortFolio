import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
const Router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);

export default Router;