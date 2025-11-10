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
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/home",
        Component: Home,
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/products",
        Component: Products
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/login",
        Component: Login
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/register",
        Component: Register
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/exports",
        Component: Exports,
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/imports",
        Component: Imports,
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
      {
        path: "/add",
        Component: Add,
        // loader: () => fetch("/services.json").then((res) => res.json()),
      },
    ],
  },
]);

// All Products,My Exports, My Imports, Add Export routes
// Login/Register

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
