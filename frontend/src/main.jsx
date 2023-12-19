import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import InscriptionComponent from "./components/InscriptionComponent/InscriptionComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscription",
    element: <InscriptionComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
