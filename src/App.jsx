import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthenticationPage } from "./screens/AuthenticationPage";
import { LandingPage } from "./screens/LandingPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage />,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
  {
    path: "/authenticationpage",
    element: <AuthenticationPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
