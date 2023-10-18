import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./Components/Root/MainRoot";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import MyCart from "./Components/MyCart/MyCart";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import BrandDetails from "./Components/BrandDetails/BrandDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("/brand.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
