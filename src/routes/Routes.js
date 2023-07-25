import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "Pages/HomePage";

export default function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return element;
}
