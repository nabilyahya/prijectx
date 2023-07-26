import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "Pages/HomePage";
import DetailsPage from "Pages/DetailsPage";

export default function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/DetailsPage",
      element: <DetailsPage />,
    },
  ]);

  return element;
}
