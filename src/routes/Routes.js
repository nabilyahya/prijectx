import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "Pages/HomePage";
import DetailsPage from "Pages/DetailsPage";
import KuafforDetailsPage from "Pages/KuafforDetailsPage";
import KuaforList from "Pages/KuaforList";
import MedicalDescribe from "Pages/MedicalDescribe";
import ProductsList from "Pages/ProductsList";
import ControlPanel from "Pages/ControlPanelTest";
import LoginPage from "Pages/LoginPage";
import SignUpPage from "Pages/SginUp";
export default function Routes() {
  // WE NEED TO MODIFY THE ROUTS AFTER WE DONE
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/DetailsPage",
      element: <DetailsPage />,
    },
    {
      path: "/K-Details",
      element: <KuafforDetailsPage />,
    },
    {
      path: "/Kuafor-List",
      element: <KuaforList />,
    },
    {
      path: "/MedicalDescribe-List",
      element: <MedicalDescribe />,
    },
    {
      path: "/ProductsList-List",
      element: <ProductsList />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/SignUp",
      element: <SignUpPage />,
    },

    {
      path: "/admin",
      element: <ControlPanel />,
    },
  ]);

  return element;
}
