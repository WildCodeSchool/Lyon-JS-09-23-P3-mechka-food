import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ProfilComponent from "./components/Profil/ProfilComponent";
import InscriptionComponent from "./components/InscriptionComponent/InscriptionComponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profil",
    element: <ProfilComponent />,

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
