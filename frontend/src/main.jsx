import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RecipePage from "./pages/recipePage/RecipePage";

import Search from "./pages/Search/Search";

import ProfilComponent from "./components/Profil/ProfilComponent";

import InscriptionComponent from "./components/InscriptionComponent/InscriptionComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {

    path: "/recipes/:id",
    element: <RecipePage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/logSignIn",
    element: <InscriptionComponent />, // Composant à changer lors que la page sera créé.
  },
  {
    path: "/profil",
    element: <ProfilComponent />, // Route lors que le USER est connecté à son profil.
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
