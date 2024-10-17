import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHeart, FaShoppingCart  , FaRegUser } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {

  const result = useSelector((state) => state.cart)

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="w-full p-6 flex justify-around items-center z-50 sticky top-0 bg-gray-300 border-b-4 border-black">
        <div className="container">
          <div className="flex justify-between">
            <div>
                <NavLink to="/" className="font-black">
                  LOGO
                </NavLink>
            </div>
            <div className="flex items-center justify-between ml-5">
              <div className="space-x-12">
              <NavLink
                  to="/"
                  className="page"
                 
                >
                  Home
                </NavLink>
                <NavLink
                  to="/contact"
                  className="page"
                 
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/aboutUs"
                  className="page"
                 
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/product"
                  className="product"
                 
                >
                  Product
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4 mr-1">
              <div className="relative">
                <NavLink to="/cart">
                  <FaShoppingCart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1  text-[#fff] bg-[#ff0000] text-xs">{result.length}</span>
                </NavLink>
              </div>
              <div className="relative">
                <NavLink to="/wishlist">
                  <FaHeart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  <span className="absolute top-0 right-5  transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1  text-[#fff] bg-[#ff0000] text-xs">0</span>
                </NavLink>
              </div>
              <div className="relative">
                <NavLink to="/profile">
                  <FaRegUser className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                </NavLink>
              </div>
              <div className="relative">
                <NavLink to="/login">
                  <IoIosLogIn className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Outlet />
    </>
  );
};

export default Navbar;
