import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import PetSupplies from "../Pages/PetSupplies";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

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
      
    ],
  },
]);