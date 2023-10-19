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
import CarDetails from "./Components/CarDetails/CarDetails";
import UpdateCar from "./Components/UpdateCar/UpdateCar";
import AuthProvider from "./Components/Provider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Error from "./Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
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
      {
        path: "/carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://drive-master-pro-server.vercel.app/carDetails/${params.id}`
          ),
      },
      {
        path: "/updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar></UpdateCar>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://drive-master-pro-server.vercel.app/carDetails/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
