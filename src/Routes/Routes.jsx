import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import PetSupplies from "../Pages/PetSupplies";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import MyServices from "../Pages/MyServices";
import UpdateServices from "../Pages/UpdateServices";
import MyOrders from "../Pages/MyOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
           path: "/", 
           element: <Home/> 
        },
        {
           path: "/login", 
           element: <Login/> 
        },
        {
           path: "/register", 
           element: <Register/> 
        },
        {
           path: "/add-services", 
           element: <AddService/> 
        },
        {
           path: "/services", 
           element: <PetSupplies/> 
        },
        {
           path: "/details/:myId", 
           element: <PrivateRoute><ServiceDetails/> </PrivateRoute>
        },
        {
           path: "/my-services", 
           element: <PrivateRoute><MyServices/> </PrivateRoute>
        },
        {
           path: "/update-services/:id", 
           element: <PrivateRoute><UpdateServices/> </PrivateRoute>
        },
        {
           path: "/my-orders", 
           element: <PrivateRoute><MyOrders/> </PrivateRoute>
        },
      
    ],
  },
]);