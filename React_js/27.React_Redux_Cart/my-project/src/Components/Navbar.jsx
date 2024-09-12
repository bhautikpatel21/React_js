  import React from "react";
  import { NavLink, Outlet } from "react-router-dom";
  import { FaHeart, FaShoppingCart } from "react-icons/fa";
  import { useSelector } from "react-redux";

  const Navbar = () => {

    const cartItems = useSelector((state) => state.cart);
    const wishItems = useSelector((state) => state.wishdata);

    return (
      <>
        <div className="w-full p-8 flex justify-around items-center z-50 sticky top-0 bg-gray-300 border-b-4 font-bold text-2xl border-black">
          <div className="container">
            <div className="flex justify-between">
              <div>
                <NavLink to="/" className="">
                  LOGO
                </NavLink>
              </div>
              <div className="flex items-center justify-between ml-5">
                <div className="space-x-12">
                  <NavLink to="/contact" className="page">
                    Contact
                  </NavLink>

                  <NavLink to="/aboutUs" className="page">
                    About Us
                  </NavLink>
                  <NavLink to="/product" className="product">
                    Product
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center space-x-4 mr-1">
                <div className="relative">
                  <NavLink to="/cart">
                    <FaShoppingCart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                    <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1 text-[#fff] bg-[#ff0000] text-xs">
                    {cartItems.length}
                    </span>
                  </NavLink>
                </div>
                <div className="relative">
                  <NavLink to="/wishlist">
                    <FaHeart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                    <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1 text-[#fff] bg-[#ff0000] text-xs">
                    {wishItems.length}</span>
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
