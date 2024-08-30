import React, { useState } from "react";
import VdLogo from "../assets/vd.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {

  const result = useSelector((state) => state.cart)


  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="Dankhara w-full h-28 flex justify-around items-center z-50 sticky top-0">
        <div className="container">
          <div className="flex items-center justify-between ml-5">

            <NavLink to="/" className="flex items-center rtl:space-x-reverse">
              <img
                id="logo"
                className="size-16  "
                src={VdLogo}
                alt="Not Found"
              />
            </NavLink>
            <div className="hidden md:flex space-x-16" id="toggle">
              <div
                className="relative"
                onMouseEnter={() => toggleMenu("home")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Home &#11163;</button>
                {activeMenu === "home" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#ff6822] shadow-lg rounded-md overflow-hidden">
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home1
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("shop")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Shop &#11163;</button>
                {activeMenu === "shop" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/shopList"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        ShopList
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/wishlist"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("products")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Products &#11163;</button>
                {activeMenu === "products" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/product"
                        className="product"
                        onClick={() => toggleMenu(null)}
                      >
                        Product
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("blog")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Blog &#11163;</button>
                {activeMenu === "blog" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/blog"
                        className="blog"
                        onClick={() => toggleMenu(null)}
                      >
                        Blog Card
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("cart")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Cart &#11163;</button>
                {activeMenu === "cart" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/cart"
                        className="cart"
                        onClick={() => toggleMenu(null)}
                      >
                        Cart
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("page")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Page &#11163;</button>
                {activeMenu === "page" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/contact"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/aboutUs"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="hover:bg-gray-100 px-5 py-2">
                      <NavLink
                        to="/page404"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Page 404
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4 mr-1">
              <div className="relative">
                <NavLink to="/cart">
                  <FaShoppingCart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1  text-[#fff] bg-[#ff0000] text-xs">0</span>
                </NavLink>
              </div>
              <div className="relative">
                <NavLink to="/wishlist">
                  <FaHeart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  <span className="absolute top-0 right-5  transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1  text-[#fff] bg-[#ff0000] text-xs">0</span>
                </NavLink>
              </div>

            </div>
          </div>


        </div>


      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
