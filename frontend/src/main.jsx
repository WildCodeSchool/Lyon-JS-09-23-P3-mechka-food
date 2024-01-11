import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Contact from "./components/Contact/Contact";
import RecipePage from "./pages/recipePage/RecipePage";
import Search from "./pages/Search/Search";
import ProfilComponent from "./components/Profil/ProfilComponent";
import InscriptionComponent from "./components/InscriptionComponent/InscriptionComponent";
import CategoryById from "./components/category/CategoryById";
import Login from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/recipes/:id",
    element: <RecipePage />,
  },
  {
    path: "/recipes/category/:id",
    element: <CategoryById />,
  },
  {
    path: "/recipes/search",
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
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
