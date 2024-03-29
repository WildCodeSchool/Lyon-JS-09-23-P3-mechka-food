import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Contact from "./components/Contact/Contact";
import RecipePage from "./pages/recipePage/RecipePage";
import Search from "./pages/Search/Search";
import ProfilComponent from "./components/Profil/ProfilComponent";
import CategoryById from "./components/category/CategoryById";
import RegisterPage from "./pages/registerPage/RegisterPage";
import Login from "./pages/login/login";
import AdminPagePrincipal from "./pages/adminPage/AdminPagePrincipal";
import CommentPage from "./pages/CommentPage/CommentPage";
import { UserContextProvider } from "./context/userContext";
import AddRecipePage from "./pages/addNewRecipePage/AddRecipePage";
import UpdateRecipePage from "./pages/updatePage/UpdateRecipePage";

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
    path: "/recipes/:id/comment",
    element: <CommentPage />,
  },
  {
    path: "/profil",
    element: <ProfilComponent />, // Route lors que le USER est connecté à son profil.
  },

  {
    path: "/inscription",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/",
    element: <AdminPagePrincipal />,
  },
  {
    path: "/recipes/add",
    element: <AddRecipePage />,
  },
  {
    path: "/recipes/:id/edit",
    element: <UpdateRecipePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
