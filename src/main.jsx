import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import { Toaster } from "react-hot-toast";
import Exports from "./components/Exports/Exports.jsx";
import Imports from "./components/Imports/Imports.jsx";
import Add from "./components/Add/Add.jsx";
import Products from "./components/Products/Products.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Details from "./components/Details/Details.jsx";

export const AuthContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/:id",
        Component: Details,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/exports",
        Component: Exports,
      },
      {
        path: "/imports",
        Component: Imports,
      },
      {
        path: "/add",
        Component: Add,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
