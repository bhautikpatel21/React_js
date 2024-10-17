import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Blog from "./Blog";
import Contact from "./Contact";
import Wishlist from "./Wishlist";
import AboutUs from "./AboutUs";
import Error404 from "./Error404";
import Cart from "./Cart";
import Login from "./Login";
import Profile from "./Profile";
import RequireAuth from "../Utils/RequireAuth";

const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Navbar will always be visible
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product",
        element: <RequireAuth><Product /></RequireAuth>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/page404",
        element: <Error404 />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

const Layout = () => {
  return <RouterProvider router={PageRouter} />;
};

export default Layout;
